from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

class Account(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)

    created = models.DateTimeField(default=timezone.now(), editable=False)
    modified = models.DateTimeField(default=timezone.now())

    class Meta:
        verbose_name_plural = "Accounts"

    def __str__(self):
        return self.user.username

    def save(self, *args, **kwargs):
        ''' On save, update timestamps '''
        if not self.id:
            self.created = timezone.now()
        self.modified = timezone.now()
        return super(Accounts, self).save(*args, **kwargs)
    
