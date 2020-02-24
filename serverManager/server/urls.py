from rest_framework import routers
from .api import * 

router = routers.DefaultRouter()
router.register('api/test', TestViewSet, 'test')
router.register('api/fund', FundViewSet, 'fund')
router.register('api/commit', CommitViewSet, 'commit')
router.register('api/call', CallViewSet, 'call')
router.register('api/fundinvest', FundInvestViewSet, 'fundinvest')

urlpatterns = router.urls
