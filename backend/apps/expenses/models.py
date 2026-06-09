from django.db import models
from django.conf import settings


class Expense(models.Model):

    TRANSACTION_TYPES = (
        ("expense", "Expense"),
        ("income", "Income"),
    )

    SOURCE_TYPES = (
        ("manual", "Manual"),
        ("sms", "SMS"),
        ("bank", "Bank"),
    )

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="expenses"
    )

    category = models.ForeignKey(
        "categories.Category",
        on_delete=models.SET_NULL,
        null=True,
        blank=True
    )

    amount = models.DecimalField(
        max_digits=12,
        decimal_places=2
    )

    merchant = models.CharField(
        max_length=255
    )

    description = models.TextField(
        blank=True
    )

    transaction_type = models.CharField(
        max_length=20,
        choices=TRANSACTION_TYPES,
        default="expense"
    )

    source = models.CharField(
        max_length=20,
        choices=SOURCE_TYPES,
        default="manual"
    )

    transaction_date = models.DateField()

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    updated_at = models.DateTimeField(
        auto_now=True
    )

    class Meta:
        ordering = ["-transaction_date"]

    def __str__(self):
        return f"{self.merchant} - ₹{self.amount}"