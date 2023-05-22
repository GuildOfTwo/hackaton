from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from comments.views import (CommentViewSet)
from objects.views import (ObjectViewSet)

router = DefaultRouter()

router.register('comments', CommentViewSet, basename='comments')
router.register('objects', ObjectViewSet, basename='objects')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),

]
