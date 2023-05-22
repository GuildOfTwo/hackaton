from django.contrib import admin

from buildings.models import Building, BuildingPhoto


class BuildingsPhotoAdmin(admin.StackedInline):
    model = BuildingPhoto


class BuildingsAdmin(admin.ModelAdmin):
    inlines = [BuildingsPhotoAdmin, ]


admin.site.register(Building, BuildingsAdmin)
