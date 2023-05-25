from django.db import models
from users.models import Landlord
from users.models import RenterIndividual
import json


class Building(models.Model):
    CHOICES = [
        ('FI', 'Кино-, фотосъемка'),
        ('VI', 'Выставка'),
        ('AR', 'Арт-пространство'),
        ('AU', 'Аудиозапись'),
 ]
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
    specialization = models.CharField(
            verbose_name='Специализация',
            help_text='Выберите специализацию обьекта',
            choices = CHOICES,
            max_length=200
    )
    desc = models.TextField(
            verbose_name='Описание площадки',
            help_text='Введите описание площадки',
            blank=True,
    )
    address = models.CharField(
            max_length=100,
            blank=False,
            verbose_name='Адрес объекта'
    )
    coordinates = models.CharField(
            max_length=30,
            blank=False,
            verbose_name='Координаты объекта'
    )
    operating_hours = models.CharField(
            max_length=50,
            blank=True,
            verbose_name='Режим работы'
    )
    site = models.URLField(
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
    bookings = models.TextField(
            verbose_name='Даты бронирования',
            help_text='Даты в которые объект занят',
            blank=True
            )
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

    def set_bookings(self, x):
        self.bookings = json.dumps(x)
    
    def get_bookings(self):
        return [self.bookings]


    def __str__(self):
        return self.title


class Booking(models.Model):
    building = models.ForeignKey(
        Building,
        on_delete=models.CASCADE,
        related_name='booking'
    )
    renter = models.ForeignKey(
        RenterIndividual,
        on_delete=models.CASCADE,
        related_name='booking',
        verbose_name='Арендатор'
    )
    check_in = models.DateTimeField(
        'Дата начала аренды',
        auto_now_add=True,
        db_index=True,
        help_text='Дата начала аренды'
    )
    check_out = models.DateTimeField(
        'Дата окончания аренды',
        auto_now_add=True,
        db_index=True,
        help_text='Дата окончания аренды'
    )


class BuildingImage(models.Model):
    building = models.ForeignKey(
        Building,
        on_delete=models.CASCADE,
        related_name='building_images'
    )
    image = models.ImageField(
        verbose_name='Изображение',
        blank=True,
        upload_to='building_images/%Y/%m/%d/',
        help_text='Выберите изображение'
    )

    class Meta:
        verbose_name = "Изображение"
        verbose_name_plural = "Изображения"

    def __str__(self):
        return self.building.title