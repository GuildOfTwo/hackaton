from django.contrib import admin

from buildings.models import Building, BuildingImage, Status


class BuildingImageAdmin(admin.StackedInline):
    model = BuildingImage


class BuildingAdmin(admin.ModelAdmin):
    inlines = [BuildingImageAdmin]


admin.site.register(Building, BuildingAdmin)


class StatusAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'stat',
        'reject_text',
        'building',
    )

admin.site.register(Status, StatusAdmin)