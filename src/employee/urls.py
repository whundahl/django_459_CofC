from django.contrib import admin  
from django.conf.urls import url
from employee import views  

urlpatterns = [  
    url(r'^emp/$', views.emp, name='emp'),  
    url(r'^show/$',views.show, name='show'),  
    url(r'^edit/(?P<id>([0-9A-Za-z_\-]+))/$', views.edit, name='edit'),  
    url(r'^update/(?P<id>([0-9A-Za-z_\-]+))/$', views.update, name='update'),  
    url(r'^delete/(?P<id>([0-9A-Za-z_\-]+))/$', views.destroy, name='delete'),  
]  