from django.contrib import admin

from buildings.models import Building, BuildingPhoto


class BuildingImageAdmin(admin.StackedInline):
    model = BuildingPhoto


class BuildingAdmin(admin.ModelAdmin):
    inlines = [BuildingImageAdmin]


admin.site.register(Building, BuildingAdmin)
