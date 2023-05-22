from django.db import models
from users.models import User, RenterIndividual
from django.core.validators import MinValueValidator, MaxValueValidator


class Comment(models.Model):
    author = models.ForeignKey(
        RenterIndividual,
        on_delete=models.CASCADE,
        related_name='comments',
        verbose_name='Автор'
    )
    
    text = models.TextField(verbose_name='Текст отзыва',
                            help_text='Введите текст отзыва')
    pub_date = models.DateTimeField(
        'Дата публикации отзыва',
        auto_now_add=True,
        db_index=True,
        help_text='Дата публикации отзыва'
    )
    score = models.IntegerField(
        'Оценка',
        validators=[
            MinValueValidator(1),
            MaxValueValidator(10)
        ],
        help_text='Введдите оценку'
    )

    class Meta:
        verbose_name = 'Отзыв'
        verbose_name_plural = 'Отзывы'
        ordering = ['-pub_date']


    def __str__(self):
        return self.author.first_name
