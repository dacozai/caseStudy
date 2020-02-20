from rest_framework import serializers
from server.models import Test 

# Lead Serializer
class TestSerializer(serializers.ModelSerializer):
  class Meta:
    model = Test 
    fields = '__all__'
