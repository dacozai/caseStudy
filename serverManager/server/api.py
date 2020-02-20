from server.models import Test
from rest_framework import viewsets, permissions
from .serializers import TestSerializer

# Lead Viewset
class TestViewSet(viewsets.ModelViewSet):
  queryset = Test.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]
  serializer_class = TestSerializer

