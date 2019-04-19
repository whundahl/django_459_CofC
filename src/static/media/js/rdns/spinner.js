{/* <div id="formsubmitbutton">
<input type="submit" name="submitter" value="Submit Button" onclick="ButtonClicked()">
</div>
<div id="buttonreplacement" style="margin-left:30px; display:none;">
<img src="//www.willmaster.com/images/preload.gif" alt="loading...">
</div> */}

function ButtonClicked() {
//    document.getElementById("button-upload").disabled = true; // to undisplay
    document.getElementById("spinner").style.display = ""; // to display
    document.getElementById("loading").style.display = "none";
    document.getElementById("dig").style.display = "";
    // var f = document.forms[formId].getElementsByTagName('input');
    // for (var i=0;i<f.length;i++)
    //     f[i].disabled=true
    // var f = document.forms[0].getElementsByTagName('textarea');
    // for (var i=0;i<f.length;i++)
    //     f[i].disabled=true
    return true;
}
var FirstLoading = true;
function RestoreSubmitButton()
{
   if( FirstLoading )
   {
      FirstLoading = false;
      return;
   }
//    document.getElementById("formsubmitbutton").style.display = ""; // to display
    document.getElementById("spinner").style.display = "none"; // to undisplay
    document.getElementById("loading").style.display = "";
    document.getElementById("dig").style.display = "";
    // var f = document.forms[formId].getElementsByTagName('input');
    // for (var i=0;i<f.length;i++)
    //     f[i].disabled=false
    // var f = document.forms[0].getElementsByTagName('textarea');
    // for (var i=0;i<f.length;i++)
    //     f[i].disabled=false
//    document.getElementById("button-upload").disabled = false;
}
// To disable restoring submit button, disable or delete next line.
document.onfocus = RestoreSubmitButton;
