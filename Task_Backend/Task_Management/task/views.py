from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from . serializers import *
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate,logout
from rest_framework.permissions import IsAuthenticated 
from . models import *

class RegisterView(APIView):
    def post(self,request):
        data=request.data
        serializer=RegisterSerializer(data=data)
        if not serializer.is_valid():
            return Response(
                {
                    'status':False,
                    'message':serializer.errors,
                },status.HTTP_400_BAD_REQUEST
            )
        serializer.save()
        return Response({'status':True,'message':'User Created'},status.HTTP_200_OK)


class LoginView(APIView):
    def post(self,request):
        data=request.data
        serializer=LoginSerializer(data=data)
        if not serializer.is_valid():
            return Response(
                {
                    'status':False,
                    'message':serializer.errors,
                },status.HTTP_400_BAD_REQUEST
            )
        user=authenticate(username=serializer.data['username'],password=serializer.data['password'])
        if user is None:
            return Response(
                {
                    'status': False,
                    'message': 'Invalid username or password',
                }, status=status.HTTP_401_UNAUTHORIZED
            )
        token, created = Token.objects.get_or_create(user=user)
        
        return Response(
            {
                'status': True,
                'message': 'User logged in',
                'token':str(token),
            }, status=status.HTTP_200_OK
        )
    
class LogoutView(APIView):
    def post(self,request):
        logout(request)
        return Response(
            {
                'status': True,
                'message': 'User logged out'
            }, status=status.HTTP_200_OK
        )



# CRUD Operation for Task
class TaskView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, id=None):
        """View all tasks or a single task by its ID"""
        if id:
            # Fetch a single task by its ID
            task = get_object_or_404(Task, id=id, user=request.user)
            serializer = TaskSerializer(task)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            # Fetch all tasks for the authenticated user
            tasks = Task.objects.filter(user=request.user).order_by('priority', 'due_date')
            serializer = TaskSerializer(tasks, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self,request):
        """Create a task"""
        data=request.data
        serializer=TaskSerializer(data=data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data)
        return Response(serializer.errors)
    
    def put(self, request,id=None):
        """Update a task by its ID"""
        task = get_object_or_404(Task, id=id, user=request.user)
        serializer = TaskSerializer(task, data=request.data,partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, id=None):
        """Delete a task by its ID"""
        task= get_object_or_404(Task, id=id)
        task.delete()
        return Response({'message': 'Task deleted successfully'}, status=status.HTTP_202_ACCEPTED)

    
