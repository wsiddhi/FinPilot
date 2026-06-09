from django.contrib import admin
from .models import Expense


@admin.register(Expense)
class ExpenseAdmin(admin.ModelAdmin):

    list_display = (
        "merchant",
        "amount",
        "transaction_type",
        "source",
        "transaction_date",
    )

    search_fields = (
        "merchant",
        "description",
    )

    list_filter = (
        "transaction_type",
        "source",
        "transaction_date",
    )