from django.contrib import admin

from comments.models import Comment


class CommentsAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'text',
        'author',
        'pub_date',
        'score',
    )
    list_display_links = (
        'author',
        'text',
    )


admin.site.register(Comment, CommentsAdmin)