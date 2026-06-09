from django.contrib import admin
from .models import Category


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "name",
        "is_default",
        "created_at",
    )

    search_fields = ("name",)

    list_filter = (
        "is_default",
    )