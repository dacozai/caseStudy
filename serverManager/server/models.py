from django.db import models
from collections import namedtuple

from django.db import connection

# Create your models here.
class Test(models.Model):
  name = models.CharField(max_length=100)
  email = models.EmailField(max_length=100, unique=True)
  message = models.CharField(max_length=500, blank=True)
  created_at = models.DateTimeField(auto_now_add=True)

class Fund(models.Model):
  fund_id = models.AutoField(primary_key=True)
  name = models.CharField(max_length=100, unique=True)

class FundCommitment(models.Model):
  fund_id = models.ForeignKey(
    'Fund',
    on_delete=models.CASCADE,
  )
  date = models.DateTimeField()
  amount = models.DecimalField(max_digits=19, decimal_places=2)

class Call(models.Model):
  call_id = models.IntegerField()
  date = models.DateTimeField()
  invest_name = models.CharField(max_length=100)
  capital_require = models.DecimalField(max_digits=19, decimal_places=2) 

class FundInvest(models.Model):
  call_id = models.ForeignKey(
    'Call',
    on_delete=models.CASCADE,
  )
  commit_id = models.IntegerField() 
  fund_id = models.ForeignKey(
    'Fund',
    on_delete=models.CASCADE,
  )
  invest_amount = models.DecimalField(max_digits=19, decimal_places=2) 




