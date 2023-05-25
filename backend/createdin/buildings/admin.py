from django.contrib import admin

from buildings.models import Building, BuildingImage, Spec


class BuildingImageAdmin(admin.StackedInline):
    model = BuildingImage


class BuildingAdmin(admin.ModelAdmin):
    inlines = [BuildingImageAdmin]


class SpecAdmin(admin.ModelAdmin):
    list_display = (
        'pk',
        'name'
    )

admin.site.register(Spec, SpecAdmin)
admin.site.register(Building, BuildingAdmin)
