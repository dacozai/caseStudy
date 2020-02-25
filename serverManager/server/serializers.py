from rest_framework import serializers
from server.models import * 

# Test Serializer
class TestSerializer(serializers.ModelSerializer):
  class Meta:
    model = Test 
    fields = '__all__'

# Test Serializer
class FundSerializer(serializers.ModelSerializer):
  class Meta:
    model = Fund 
    fields = '__all__'

# Commit Serializer
class CommitSerializer(serializers.ModelSerializer):
  class Meta:
    model = FundCommitment 
    fields = '__all__'

# Call Serializer
class CallSerializer(serializers.ModelSerializer):
  class Meta:
    model = Call 
    fields = '__all__'

# FundInvest Serializer
class FundInvestSerializer(serializers.ModelSerializer):
  class Meta:
    model = FundInvest 
    fields = '__all__'


