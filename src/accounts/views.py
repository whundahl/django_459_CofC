from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from accounts.models import Account

@login_required
def index(request):
        return render(request, 'accounts/profile.html')


@login_required
def profile(request):
        return render(request, 'accounts/profile.html', {'accounts': Account.objects.all()})
