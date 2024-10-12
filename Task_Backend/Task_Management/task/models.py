from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

PRIORITY_CHOICES=[
    ('Low','Low'),
    ('Medium','Medium'),
    ('High','High')
]

STATUS_CHOICES=[
    ('To Do','To Do'),
    ('In progress','In progress'),
    ('Completed','Completed')
]

class Task(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE,related_name='user_task',null=False, default=1)
    title=models.CharField(max_length=100)
    description=models.TextField()
    priority=models.CharField(
        max_length=10,choices=PRIORITY_CHOICES,default='Medium'
    )
    status=models.CharField(max_length=20,choices=STATUS_CHOICES,default='To Do')
    due_date=models.DateTimeField(default=timezone.now)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title