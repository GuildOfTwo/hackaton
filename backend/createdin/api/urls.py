from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api.views import (CommentViewSet, BuildingViewSet,
                       RenterIndividualProfileViewSet,
                       RenterLegalProfileViewSet,
                       LandlordProfileViewSet)

app_name = 'api'

router_v1 = DefaultRouter()
router_v1.register(
    ' renter individual profile',
    RenterIndividualProfileViewSet,
    basename='renter_individual_profile'
)
router_v1.register(
    ' renter legal profile',
    RenterLegalProfileViewSet,
    basename='renter_individual_profile'
)
router_v1.register(
    ' landlord profile',
    LandlordProfileViewSet,
    basename='renter_individual_profile'
)
router_v1.register('comments', CommentViewSet, basename='comments')
router_v1.register('buildings', BuildingViewSet, basename='buildings')


urlpatterns = [
    path('v1', include(router_v1.urls))
]