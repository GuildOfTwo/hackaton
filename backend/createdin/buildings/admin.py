from django.contrib import admin

from buildings.models import Building, BuildingImage


class BuildingImageAdmin(admin.StackedInline):
    model = BuildingImage


class BuildingAdmin(admin.ModelAdmin):
    inlines = [BuildingImageAdmin]


admin.site.register(Building, BuildingAdmin)
