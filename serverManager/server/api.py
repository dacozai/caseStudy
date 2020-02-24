from server.models import * 
from rest_framework import viewsets, permissions
from .serializers import * 

# Test Viewset
class TestViewSet(viewsets.ModelViewSet):
  queryset = Test.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = TestSerializer

# Fund ViewSet
class FundViewSet(viewsets.ModelViewSet):
  queryset = Fund.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = FundSerializer

# Commitment ViewSet
class CommitViewSet(viewsets.ModelViewSet):
  queryset = FundCommitment.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = CommitSerializer

# Call ViewSet
class CallViewSet(viewsets.ModelViewSet):
  queryset = Call.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = CallSerializer

# FundInvest ViewSet
class FundInvestViewSet(viewsets.ModelViewSet):
  queryset = FundInvest.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = FundInvestSerializer
  
