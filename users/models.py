from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

class Patient(models.Model):
    user_patient = models.ForeignKey(User,on_delete=models.CASCADE)
    anxiety_lvl = models.IntegerField()
    stress_lvl = models.IntegerField()
    mt_lvl = models.IntegerField()
    pt_lvl = models.IntegerField()
    date_sess = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.user_patient.username
