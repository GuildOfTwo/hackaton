from django.contrib import admin

from objects.models import Object, ObjectPhoto


class ObjectPhotoAdmin(admin.StackedInline):
    model = ObjectPhoto


class ObjectAdmin(admin.ModelAdmin):
    inlines = [ObjectPhotoAdmin,]


admin.site.register(Object, ObjectAdmin)