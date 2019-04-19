from django.conf.urls import url, include
from django.contrib import admin
from django.contrib.auth import views as auth_views
from core import views as core_views


urlpatterns = [
    
    url(r'^$', auth_views.login, {'template_name': 'core/login.html'}, name='login'),
    url(r'^home/', core_views.home, name='home'),
    url(r'^login/', auth_views.login, {'template_name': 'core/login.html'}, name='login'),
    url(r'^logout/', auth_views.logout, {'next_page': '/'}, name='logout'),
    url(r'^accounts/', include('accounts.urls')),
    url(r'^register/', core_views.register, name='register'),

# Password Reset URLs (Based on Django Auth App uRLs)
    url(r'^password_reset/$', auth_views.password_reset, {'template_name': 'core/password_reset_form.html', 'html_email_template_name': 'core/password_reset_email.html'}, name='password_reset'),
    url(r'^password_reset/done/$', auth_views.password_reset_done, {'template_name': 'core/password_reset_done.html'}, name='password_reset_done'),
    url(r'^reset/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$', auth_views.password_reset_confirm, {'template_name': 'core/password_reset_confirm.html'}, name='password_reset_confirm'),
    url(r'^reset/done/$', auth_views.password_reset_complete, {'template_name': 'core/password_reset_complete.html'}, name='password_reset_complete'),
# --End Password Reset URLs--

# --Profile Change URLs--
    url(r'^password/', core_views.change_password, name='change_password'),
#--End Profile Change URLs --

# Jet Admin Styling
    url(r'^jet/', include('jet.urls', 'jet')),  # Django JET URLS
    url(r'^jet/dashboard/', include('jet.dashboard.urls', 'jet-dashboard')),  # Django JET dashboard URLS
    url(r'^admin/', include(admin.site.urls)),

# Employee application 

    url(r'^employee/', include('employee.urls')),

]



