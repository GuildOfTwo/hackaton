from django.db import models
from users.models import Landlord


class Building(models.Model):
    owner = models.ForeignKey(
        Landlord,
        on_delete=models.CASCADE,
        related_name='buildings',
        verbose_name='Владелец',
        help_text='Выберите контактное лицо/владельца обьекта'
    )
    title = models.CharField(
            max_length=200,
            blank=False,
            verbose_name='Название',
            help_text='Введите название обьекта'
    )
    specialization = models.TextField(
            verbose_name='Специализация',
            help_text='Опишите специализацию обьекта',
            blank=True,
    )
    desc = models.TextField(
            verbose_name='Описание площадки',
            help_text='Введите описание площадки',
            blank=True,
    )
    address = models.CharField(
            max_length=12,
            blank=False,
            verbose_name='Адрес объекта'
    )
    coordinates = models.CharField(
            max_length=12,
            blank=False,
            verbose_name='Координаты объекта'
    )
    operating_hours = models.CharField(
            max_length=12,
            blank=True,
            verbose_name='Режим работы'
    )
    site = models.CharField(
            max_length=40,
            verbose_name='Сайт объекта',
            help_text='Введите сайт объекта'
    )
    area_sum = models.PositiveIntegerField(
            verbose_name='Общая площадь имущественного комплекса (кв. м)',
            help_text='Введите общую площадь имущественного комплекса (кв. м)',
            blank=True
    )
    area_rent = models.PositiveIntegerField(
            verbose_name='Свободная арендопригодная площадь (кв. м)',
            help_text='Введите свободную арендопригодную площадь (кв. м)',
            blank=True
    )
    features = models.TextField(
            verbose_name='Особенности',
            help_text='Напишите объекты коллективного пользования, спец. оборудование объектов и т.д. ',
            blank=True
    )
    additional_information = models.TextField(
            verbose_name='Дополнительная информация',
            help_text='Введите важную по вашему мнению дополнительную информацию',
            blank=True
            )
    capacity = models.CharField(
            max_length=200,
            blank=True,
            verbose_name='Вместимость обьекта',
            help_text='Введите вместимость обьекта (кол. людей)'
    )
#     comments = models.ForeignKey(
#         Comment,
#         on_delete=models.CASCADE,
#         blank=True,
#         null=True,
#         related_name='buildings',
#         verbose_name='Отзыв'
#     )
    # rating  нужно ли в базе? Может вычислять в сериализаторе
    cost = models.CharField(
            max_length=200,
            blank=True,
            verbose_name='Стоимость',
            help_text='Введите стоимость аренды'
    )

    class Meta:
        verbose_name = 'Объект'
        verbose_name_plural = 'Обьекты'
        ordering = ['-cost']

    def __str__(self):
        return self.title


class BuildingPhoto(models.Model):
    building = models.ForeignKey(
        Building,
        on_delete=models.CASCADE,
        related_name='building_photo'
    )
    photo = models.ImageField(
        verbose_name='Фотография',
        blank=True,
        upload_to='building_images/%Y/%m/%d/',
        help_text='Выберите фотографию'
    )

    class Meta:
        verbose_name = "Фотография площадки"
        verbose_name_plural = "Фотографии площадки"

    def __str__(self):
        return self.building.title
