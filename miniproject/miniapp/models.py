from django.db import models
from datetime import datetime

# Create your models here.


class Inform(models.Model):
    name = models.CharField(max_length=20)
    email = models.EmailField()
    number = models.IntegerField()
    password = models.CharField(max_length=30)
    confirm_password = models.CharField(max_length=30)
    created_at = models.DateTimeField(default=datetime.now)
    def __str__(self):
        return self.name
