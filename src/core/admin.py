from django.contrib import admin
from django.utils.html import format_html


# Quick Admin Page styling
admin.site.site_title = "W | H Designs"
admin.site.index_title = "Admin"
logo_url= "http://hundahlwt.stu.cofc.edu/external_images/will_logo_white.png"
admin.site.site_header = format_html("<img src={url} height=55 width=200>", url=logo_url)


