from django.contrib import admin
from django.urls import path, include, re_path
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework import permissions


schema_view = get_schema_view(
   openapi.Info(
      title='Service API',
      default_version='v1',
      description='API для сервиса агрегации',
      contact=openapi.Contact(email='contact@with.us'),
      license=openapi.License(name="MIT License"),
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)


from rest_framework.routers import DefaultRouter

from comments.views import (CommentViewSet)
from objects.views import (ObjectViewSet)

router = DefaultRouter()

router.register('comments', CommentViewSet, basename='comments')
router.register('objects', ObjectViewSet, basename='objects')



urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('api.urls')),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.authtoken')),
    # path('', include(router.urls)),
]


urlpatterns += [
    re_path(r'^swagger(?P<format>\.json|\.yaml)$',
        schema_view.without_ui(cache_timeout=0), name='schema-json'),
    re_path(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0),
        name='schema-swagger-ui'),
    re_path(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=0),
        name='schema-redoc'),
]