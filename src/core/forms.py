from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.core.files.images import get_image_dimensions



class SignUpForm(UserCreationForm):
    username = forms.CharField(max_length=254, required=True, help_text='Enter a unique username')
    first_name = forms.CharField(max_length=30, required=True, help_text='(Required)')
    last_name = forms.CharField(max_length=30, required=True, help_text='(Required)')
    email = forms.EmailField(max_length=254, required=True, help_text='Enter a valid email address')
    password1 = forms.CharField(max_length=30, required=True, label="Password", help_text='Your password must contain at least 8 characters.', widget=forms.PasswordInput)
    password2 = forms.CharField(max_length=30, required=True, label="Password confirmation", help_text='Please confirm the password etered above.', widget=forms.PasswordInput)
    
    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'email', 'password1', 'password2',)

    def clean_avatar(self):
        avatar = self.cleaned_data['avatar']

        try:
            w, h = get_image_dimensions(avatar)

            #validate dimensions
            max_width = max_height = 100
            if w > max_width or h > max_height:
                raise forms.ValidationError(
                    u'Please use an image that is '
                     '%s x %s pixels or smaller.' % (max_width, max_height))

            #validate content type
            main, sub = avatar.content_type.split('/')
            if not (main == 'image' and sub in ['jpeg', 'pjpeg', 'gif', 'png']):
                raise forms.ValidationError(u'Please use a JPEG, '
                    'GIF or PNG image.')

            #validate file size
            if len(avatar) > (20 * 1024):
                raise forms.ValidationError(
                    u'Avatar file size may not exceed 20k.')

        except AttributeError:
            """
            Handles case when we are updating the user profile
            and do not supply a new avatar
            """
            pass

        return avatar