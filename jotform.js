<script src="https://cdn02.jotfor.ms/static/prototype.forms.js?v=3.3.53077" type="text/javascript"></script>
<script src="https://cdn03.jotfor.ms/static/jotform.forms.js?v=3.3.53077" type="text/javascript"></script>
<script src="https://cdn01.jotfor.ms/js/punycode-1.4.1.min.js?v=3.3.53077" type="text/javascript" defer></script>
<script src="https://cdn02.jotfor.ms/js/vendor/maskedinput_5.0.9.min.js?v=3.3.53077" type="text/javascript"></script>
<script src="https://cdn03.jotfor.ms/js/vendor/smoothscroll.min.js?v=3.3.53077" type="text/javascript"></script>
<script src="https://cdn01.jotfor.ms/js/errorNavigation.js?v=3.3.53077" type="text/javascript"></script>
<script type="text/javascript">	JotForm.newDefaultTheme = true;
	JotForm.extendsNewTheme = false;
	JotForm.singleProduct = false;
	JotForm.newPaymentUIForNewCreatedForms = true;
	JotForm.texts = {"confirmEmail":"E-mail does not match","pleaseWait":"Please wait...","validateEmail":"You need to validate this e-mail","confirmClearForm":"Are you sure you want to clear the form","lessThan":"Your score should be less than or equal to","incompleteFields":"There are incomplete required fields. Please complete them.","required":"This field is required.","requireOne":"At least one field required.","requireEveryRow":"Every row is required.","requireEveryCell":"Every cell is required.","email":"Enter a valid e-mail address","alphabetic":"This field can only contain letters","numeric":"This field can only contain numeric values","alphanumeric":"This field can only contain letters and numbers.","cyrillic":"This field can only contain cyrillic characters","url":"This field can only contain a valid URL","currency":"This field can only contain currency values.","fillMask":"Field value must fill mask.","uploadExtensions":"You can only upload following files:","noUploadExtensions":"File has no extension file type (e.g. .txt, .png, .jpeg)","uploadFilesize":"File size cannot be bigger than:","uploadFilesizemin":"File size cannot be smaller than:","gradingScoreError":"Score total should only be less than or equal to","inputCarretErrorA":"Input should not be less than the minimum value:","inputCarretErrorB":"Input should not be greater than the maximum value:","maxDigitsError":"The maximum digits allowed is","minCharactersError":"The number of characters should not be less than the minimum value:","maxCharactersError":"The number of characters should not be more than the maximum value:","freeEmailError":"Free email accounts are not allowed","minSelectionsError":"The minimum required number of selections is ","maxSelectionsError":"The maximum number of selections allowed is ","pastDatesDisallowed":"Date must not be in the past.","dateLimited":"This date is unavailable.","dateInvalid":"This date is not valid. The date format is {format}","dateInvalidSeparate":"This date is not valid. Enter a valid {element}.","ageVerificationError":"You must be older than {minAge} years old to submit this form.","multipleFileUploads_typeError":"{file} has invalid extension. Only {extensions} are allowed.","multipleFileUploads_sizeError":"{file} is too large, maximum file size is {sizeLimit}.","multipleFileUploads_minSizeError":"{file} is too small, minimum file size is {minSizeLimit}.","multipleFileUploads_emptyError":"{file} is empty, please select files again without it.","multipleFileUploads_uploadFailed":"File upload failed, please remove it and upload the file again.","multipleFileUploads_onLeave":"The files are being uploaded, if you leave now the upload will be cancelled.","multipleFileUploads_fileLimitError":"Only {fileLimit} file uploads allowed.","dragAndDropFilesHere_infoMessage":"Drag and drop files here","chooseAFile_infoMessage":"Choose a file","maxFileSize_infoMessage":"Max. file size","generalError":"There are errors on the form. Please fix them before continuing.","generalPageError":"There are errors on this page. Please fix them before continuing.","wordLimitError":"Too many words. The limit is","wordMinLimitError":"Too few words.  The minimum is","characterLimitError":"Too many Characters.  The limit is","characterMinLimitError":"Too few characters. The minimum is","ccInvalidNumber":"Credit Card Number is invalid.","ccInvalidCVC":"CVC number is invalid.","ccInvalidExpireDate":"Expire date is invalid.","ccInvalidExpireMonth":"Expiration month is invalid.","ccInvalidExpireYear":"Expiration year is invalid.","ccMissingDetails":"Please fill up the credit card details.","ccMissingProduct":"Please select at least one product.","ccMissingDonation":"Please enter numeric values for donation amount.","disallowDecimals":"Please enter a whole number.","restrictedDomain":"This domain is not allowed","ccDonationMinLimitError":"Minimum amount is {minAmount} {currency}","requiredLegend":"All fields marked with * are required and must be filled.","geoPermissionTitle":"Permission Denied","geoPermissionDesc":"Check your browser's privacy settings.","geoNotAvailableTitle":"Position Unavailable","geoNotAvailableDesc":"Location provider not available. Please enter the address manually.","geoTimeoutTitle":"Timeout","geoTimeoutDesc":"Please check your internet connection and try again.","selectedTime":"Selected Time","formerSelectedTime":"Former Time","cancelAppointment":"Cancel Appointment","cancelSelection":"Cancel Selection","noSlotsAvailable":"No slots available","slotUnavailable":"{time} on {date} has been selected is unavailable. Please select another slot.","multipleError":"There are {count} errors on this page. Please correct them before moving on.","oneError":"There is {count} error on this page. Please correct it before moving on.","doneMessage":"Well done! All errors are fixed.","invalidTime":"Enter a valid time","doneButton":"Done","reviewSubmitText":"Review and Submit","nextButtonText":"Next","prevButtonText":"Previous","seeErrorsButton":"See Errors","notEnoughStock":"Not enough stock for the current selection","notEnoughStock_remainedItems":"Not enough stock for the current selection ({count} items left)","soldOut":"Sold Out","justSoldOut":"Just Sold Out","selectionSoldOut":"Selection Sold Out","subProductItemsLeft":"({count} items left)","startButtonText":"START","submitButtonText":"Submit","submissionLimit":"Sorry! Only one entry is allowed. Multiple submissions are disabled for this form.","reviewBackText":"Back to Form","seeAllText":"See All","progressMiddleText":"of","fieldError":"field has an error.","error":"Error"};
	JotForm.newPaymentUI = true;
	JotForm.replaceTagTest = true;
	JotForm.clearFieldOnHide="disable";
	JotForm.submitError="jumpToFirstError";
	JotForm.isFullSource = true;

	JotForm.init(function(){
	/*INIT-START*/
      JotForm.setPhoneMaskingValidator( 'input_4_full', '\u0028\u0023\u0023\u0023\u0029 \u0023\u0023\u0023\u002d\u0023\u0023\u0023\u0023' );
if (window.JotForm && JotForm.accessible) $('input_5').setAttribute('tabindex',0);
      JotForm.alterTexts({"ageVerificationError":"You must be older than {minAge} years old to submit this form.","alphabetic":"This field can only contain letters","alphanumeric":"This field can only contain letters and numbers.","cancelAppointment":"Cancel Appointment","cancelSelection":"Cancel Selection","ccDonationMinLimitError":"Minimum amount is {minAmount} {currency}","ccInvalidCVC":"CVC number is invalid.","ccInvalidExpireDate":"Expire date is invalid.","ccInvalidExpireMonth":"Expiration month is invalid.","ccInvalidExpireYear":"Expiration year is invalid.","ccInvalidNumber":"Credit Card Number is invalid.","ccMissingDetails":"Please fill up the credit card details.","ccMissingDonation":"Please enter numeric values for donation amount.","ccMissingProduct":"Please select at least one product.","characterLimitError":"Too many Characters.  The limit is","characterMinLimitError":"Too few characters. The minimum is","chooseAFile_infoMessage":"Choose a file","confirmClearForm":"Are you sure you want to clear the form","confirmEmail":"E-mail does not match","currency":"This field can only contain currency values.","cyrillic":"This field can only contain cyrillic characters","dateInvalid":"This date is not valid. The date format is {format}","dateInvalidSeparate":"This date is not valid. Enter a valid {element}.","dateLimited":"This date is unavailable.","disallowDecimals":"Please enter a whole number.","doneButton":"Done","doneMessage":"Well done! All errors are fixed.","dragAndDropFilesHere_infoMessage":"Drag and drop files here","email":"Enter a valid e-mail address","error":"Error","fieldError":"field has an error.","fillMask":"Field value must fill mask.","formerSelectedTime":"Former Time","freeEmailError":"Free email accounts are not allowed","generalError":"There are errors on the form. Please fix them before continuing.","generalPageError":"There are errors on this page. Please fix them before continuing.","geoNotAvailableDesc":"Location provider not available. Please enter the address manually.","geoNotAvailableTitle":"Position Unavailable","geoPermissionDesc":"Check your browser's privacy settings.","geoPermissionTitle":"Permission Denied","geoTimeoutDesc":"Please check your internet connection and try again.","geoTimeoutTitle":"Timeout","gradingScoreError":"Score total should only be less than or equal to","incompleteFields":"There are incomplete required fields. Please complete them.","inputCarretErrorA":"Input should not be less than the minimum value:","inputCarretErrorB":"Input should not be greater than the maximum value:","invalidTime":"Enter a valid time","justSoldOut":"Just Sold Out","lessThan":"Your score should be less than or equal to","maxCharactersError":"The number of characters should not be more than the maximum value:","maxDigitsError":"The maximum digits allowed is","maxFileSize_infoMessage":"Max. file size","maxSelectionsError":"The maximum number of selections allowed is ","minCharactersError":"The number of characters should not be less than the minimum value:","minSelectionsError":"The minimum required number of selections is ","multipleError":"There are {count} errors on this page. Please correct them before moving on.","multipleFileUploads_emptyError":"{file} is empty, please select files again without it.","multipleFileUploads_fileLimitError":"Only {fileLimit} file uploads allowed.","multipleFileUploads_minSizeError":"{file} is too small, minimum file size is {minSizeLimit}.","multipleFileUploads_onLeave":"The files are being uploaded, if you leave now the upload will be cancelled.","multipleFileUploads_sizeError":"{file} is too large, maximum file size is {sizeLimit}.","multipleFileUploads_typeError":"{file} has invalid extension. Only {extensions} are allowed.","multipleFileUploads_uploadFailed":"File upload failed, please remove it and upload the file again.","nextButtonText":"Next","noSlotsAvailable":"No slots available","notEnoughStock":"Not enough stock for the current selection","notEnoughStock_remainedItems":"Not enough stock for the current selection ({count} items left)","noUploadExtensions":"File has no extension file type (e.g. .txt, .png, .jpeg)","numeric":"This field can only contain numeric values","oneError":"There is {count} error on this page. Please correct it before moving on.","pastDatesDisallowed":"Date must not be in the past.","pleaseWait":"Please wait...","prevButtonText":"Previous","progressMiddleText":"of","required":"This field is required.","requiredLegend":"All fields marked with * are required and must be filled.","requireEveryCell":"Every cell is required.","requireEveryRow":"Every row is required.","requireOne":"At least one field required.","restrictedDomain":"This domain is not allowed","reviewBackText":"Back to Form","reviewSubmitText":"Review and Submit","seeAllText":"See All","seeErrorsButton":"See Errors","selectedTime":"Selected Time","selectionSoldOut":"Selection Sold Out","slotUnavailable":"{time} on {date} has been selected is unavailable. Please select another slot.","soldOut":"Sold Out","startButtonText":"START","submissionLimit":"Sorry! Only one entry is allowed. Multiple submissions are disabled for this form.","submitButtonText":"Submit","subProductItemsLeft":"({count} items left)","uploadExtensions":"You can only upload following files:","uploadFilesize":"File size cannot be bigger than:","uploadFilesizemin":"File size cannot be smaller than:","url":"This field can only contain a valid URL","validateEmail":"You need to validate this e-mail","wordLimitError":"Too many words. The limit is","wordMinLimitError":"Too few words.  The minimum is"});
	/*INIT-END*/
	});

   setTimeout(function() {
JotForm.paymentExtrasOnTheFly([null,{"name":"heading","qid":"1","text":"Connect with an Orchid genetic counselor","type":"control_head"},{"name":"submit2","qid":"2","text":"Submit","type":"control_button"},{"description":"","name":"email","qid":"3","subLabel":"","text":"","type":"control_email"},{"description":"","name":"phoneNumber","qid":"4","text":"","type":"control_phone"},{"description":"","name":"typeA","qid":"5","subLabel":"","text":"","type":"control_textbox"}]);}, 20); 
</script>
<link type="text/css" rel="stylesheet" href="https://cdn01.jotfor.ms/stylebuilder/static/form-common.css?v=d0f72cd
"/>
<style type="text/css">@media print{*{-webkit-print-color-adjust: exact !important;color-adjust: exact !important;}.form-section{display:inline!important}.form-pagebreak{display:none!important}.form-section-closed{height:auto!important}.page-section{position:initial!important}}</style>
<link type="text/css" rel="stylesheet" href="https://cdn02.jotfor.ms/themes/CSS/5e6b428acc8c4e222d1beb91.css?v=3.3.53077"/>
<link type="text/css" rel="stylesheet" href="https://cdn03.jotfor.ms/css/styles/payment/payment_styles.css?3.3.53077" />
<link type="text/css" rel="stylesheet" href="https://cdn01.jotfor.ms/css/styles/payment/payment_feature.css?3.3.53077" />
<style type="text/css" id="form-designer-style">
    /* Injected CSS Code */

/* Begining of advanced designer */
/*PREFERENCES STYLE*/
/*  1 - Preferences style */
/*  1 - FONT FAMILY */
.form-all {
  font-family: "Inter", sans-serif;
}
/* 2 - FORM WIDTH */
.form-all {
  max-width: 752px;
}
/* 5 - FONT SIZE */
.form-all {
  font-size: 16px;
}
/* 5 - input bg color */
.form-textbox,
.form-textarea,
.form-radio-other-input,
.form-checkbox-other-input,
.form-captcha input,
.form-spinner input {
  background-color: #ffffff;
}
/* 10 - LINE SPACING */
.form-line {
  margin-top: 0px;
  margin-bottom: 0px;
}
.supernova .form-all,
.form-all {
  background-color: #f9f1eb;
}
.supernova {
  background-color: #f9f1eb;
}
.supernova body {
  background-color: transparent;
}
.form-all,
.form-label-top,
.form-label-left,
.form-label-right,
.form-html,
.form-checkbox-item label,
.form-radio-item label,
span.FITB .qb-checkbox-label,
span.FITB .qb-radiobox-label,
span.FITB .form-radio label,
span.FITB .form-checkbox label,
[data-blotid][data-type=checkbox] [data-labelid],
[data-blotid][data-type=radiobox] [data-labelid],
span.FITB-inptCont[data-type=checkbox] label,
span.FITB-inptCont[data-type=radiobox] label,
.form-sub-label {
  color: #2c3345;
}
/*PREFERENCES STYLE*/
/* 17 - INPUT WIDTHS */
/*  20 - FORM PADDING */
ul.form-section {
  padding: 0px 38px;
}
/* Heights */
/* 11 - LINE PADDING */
/* LABEL STYLE */
/* 12 - ROUNDED INPUTS */
.form-radio-item,
.form-checkbox-item {
  padding-bottom: 0px;
}
.form-radio-item:last-child,
.form-checkbox-item:last-child {
  padding-bottom: 0;
}
.form-single-column .form-checkbox-item,
.form-single-column .form-radio-item {
  width: 100%;
}
.form-checkbox-item .editor-container div,
.form-radio-item .editor-container div {
  position: relative;
}
.form-checkbox-item .editor-container div:before,
.form-radio-item .editor-container div:before {
  display: inline-block;
  vertical-align: middle;
  left: 0;
  width: 20px;
  height: 20px;
}
.form-checkbox-item input,
.form-radio-item input {
  margin-top: 2px;
}
.form-checkbox:checked + label:before,
.form-checkbox:checked + span:before {
  background-color: #2e69ff;
  border-color: #2e69ff;
}
.form-radio:checked + label:before,
.form-radio:checked + span:before {
  border-color: #2e69ff;
}
.form-radio:checked + label:after,
.form-radio:checked + span:after {
  background-color: #2e69ff;
}
.form-checkbox:hover + label:before,
.form-checkbox:hover + span:before,
.form-radio:hover + label:before,
.form-radio:hover + span:before {
  border-color: rgba(46, 105, 255, 0.5);
  box-shadow: 0 0 0 2px rgba(46, 105, 255, 0.25);
}
.form-checkbox:focus + label:before,
.form-checkbox:focus + span:before,
.form-radio:focus + label:before,
.form-radio:focus + span:before {
  border-color: #2e69ff;
  box-shadow: 0 0 0 3px rgba(46, 105, 255, 0.25);
}
.submit-button {
  font-size: 16px;
  font-weight: normal;
  font-family: inherit;
}
.submit-button {
  min-width: 180px;
}
.form-all .form-pagebreak-back,
.form-all .form-pagebreak-next {
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: normal;
}
.form-all .form-pagebreak-back,
.form-all .form-pagebreak-next {
  min-width: 128px;
}
li[data-type="control_image"] div {
  text-align: left;
}
li[data-type="control_image"] img {
  border: none;
  border-width: 0px !important;
  border-style: solid !important;
  border-color: false !important;
}
.supernova {
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center top;
  background-attachment: fixed;
  background-size: auto;
  background-size: cover;
}
.supernova {
  background-image: none;
}
#stage {
  background-image: none;
}
/* | */
.form-all {
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center top;
  background-size: cover;
}
.form-header-group {
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center top;
}
.header-large h1.form-header {
  font-size: 2em;
}
.header-large h2.form-header {
  font-size: 1.5em;
}
.header-large h3.form-header {
  font-size: 1.17em;
}
.header-large h1 + .form-subHeader {
  font-size: 1em;
}
.header-large h2 + .form-subHeader {
  font-size: .875em;
}
.header-large h3 + .form-subHeader {
  font-size: .75em;
}
.header-default h1.form-header {
  font-size: 2em;
}
.header-default h2.form-header {
  font-size: 1.5em;
}
.header-default h3.form-header {
  font-size: 1.17em;
}
.header-default h1 + .form-subHeader {
  font-size: 1em;
}
.header-default h2 + .form-subHeader {
  font-size: .875em;
}
.header-default h3 + .form-subHeader {
  font-size: .75em;
}
.header-small h1.form-header {
  font-size: 2em;
}
.header-small h2.form-header {
  font-size: 1.5em;
}
.header-small h3.form-header {
  font-size: 1.17em;
}
.header-small h1 + .form-subHeader {
  font-size: 1em;
}
.header-small h2 + .form-subHeader {
  font-size: .875em;
}
.header-small h3 + .form-subHeader {
  font-size: .75em;
}
.form-header-group {
  text-align: left;
}
div.form-header-group.header-large,
div.form-header-group.hasImage {
  margin: 0px -38px;
}
div.form-header-group.header-large,
div.form-header-group.hasImage {
  padding: 40px 52px;
}
.form-header-group .form-header,
.form-header-group .form-subHeader {
  color: -1;
}
.form-line-error {
  -webkit-transition-property: none;
  -moz-transition-property: none;
  -ms-transition-property: none;
  -o-transition-property: none;
  transition-property: none;
  -webkit-transition-duration: 0.3s;
  -moz-transition-duration: 0.3s;
  -ms-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease;
  -moz-transition-timing-function: ease;
  -ms-transition-timing-function: ease;
  -o-transition-timing-function: ease;
  transition-timing-function: ease;
  background-color: #fff4f4;
}
.form-line-error .form-error-message {
  background-color: #f23a3c;
  clear: both;
  float: none;
}
.form-line-error .form-error-message .form-error-arrow {
  border-bottom-color: #f23a3c;
}
.form-line-error input:not(#coupon-input),
.form-line-error textarea,
.form-line-error .form-validation-error {
  border: 1px solid #f23a3c;
  box-shadow: 0 0 3px #f23a3c;
}
.form-line-error {
  -webkit-transition-property: none;
  -moz-transition-property: none;
  -ms-transition-property: none;
  -o-transition-property: none;
  transition-property: none;
  -webkit-transition-duration: 0.3s;
  -moz-transition-duration: 0.3s;
  -ms-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease;
  -moz-transition-timing-function: ease;
  -ms-transition-timing-function: ease;
  -o-transition-timing-function: ease;
  transition-timing-function: ease;
  background-color: #fff4f4;
}
.form-line-active {
  background-color: #f1f5ff;
}
/* 29 - FORM COLUMNS */

/*__INSPECT_SEPERATOR__*/
input {
    background-color : transparent;
    border : 1.5px solid #00000033;
    border-radius : 12px;
    width : 100%;
}

.form-label.form-label-top {
    display : none;
}

#input_5 {
    width : 100%;
}

.form-sub-label {
    display : none;
}

.form-line.jf-required {
    border : none;
    box-shadow : none;
    background-color : transparent;
}

#input_3 {
    width : 100%;
}

#id_3 {

}

#id_4 {

}

.form-line {
    margin : 0;
}

.form-buttons-wrapper.form-buttons-center.jsTest-button-wrapperField {
    border : none;
}

.form-submit-button.submit-button.jf-form-buttons.jsTest-submitField {
    box-shadow : none;
    outline : none;
    border-radius : 96px;
    background-color : #CD9090;
    border : 1px solid #CD9090;
}

.form-submit-button.submit-button.jf-form-buttons.jsTest-submitField:hover {
    box-shadow : none;
    outline : none;
    filter : none;
}

#input_2 {

}

.form-header-group.header-large {
    border : none;
}

.form-section.page-section {
    border : none;
    box-shadow : none;
}


    /* Injected CSS Code */
</style>

<form class="jotform-form" onsubmit="return typeof testSubmitFunction !== 'undefined' && testSubmitFunction();" action="https://submit.jotform.com/submit/241003539658053" method="post" name="form_241003539658053" id="241003539658053" accept-charset="utf-8" autocomplete="on"><input type="hidden" name="formID" value="241003539658053" /><input type="hidden" id="JWTContainer" value="" /><input type="hidden" id="cardinalOrderNumber" value="" /><input type="hidden" id="jsExecutionTracker" name="jsExecutionTracker" value="build-date-1712751426617" /><input type="hidden" id="submitSource" name="submitSource" value="unknown" /><input type="hidden" id="buildDate" name="buildDate" value="1712751426617" />
  <div role="main" class="form-all">
    <ul class="form-section page-section">
      <li id="cid_1" class="form-input-wide" data-type="control_head">
        <div class="form-header-group  header-large">
          <div class="header-text httac htvam">
            <h1 id="header_1" class="form-header" data-component="header">Connect with an Orchid genetic counselor</h1>
            <div id="subHeader_1" class="form-subHeader">More text here if necessary --&gt; maybe explain the next steps after you submit an email inquiry</div>
          </div>
        </div>
      </li>
      <li class="form-line jf-required" data-type="control_email" id="id_3"><label class="form-label form-label-top form-label-auto" id="label_3" for="input_3" aria-hidden="true"> <span class="form-required">*</span> </label>
        <div id="cid_3" class="form-input-wide jf-required" data-layout="half"> <input type="email" id="input_3" name="q3_email" class="form-textbox validate[required, Email]" data-defaultvalue="" autoComplete="section-input_3 email" style="width:310px" size="310" placeholder="Email Address" data-component="email" aria-labelledby="label_3" required="" value="" /> </div>
      </li>
      <li class="form-line" data-type="control_phone" id="id_4" data-compound-hint="Phone Number (optional)"><label class="form-label form-label-top form-label-auto" id="label_4" for="input_4_full"> </label>
        <div id="cid_4" class="form-input-wide" data-layout="half"> <span class="form-sub-label-container" style="vertical-align:top"><input type="tel" id="input_4_full" name="q4_phoneNumber[full]" data-type="mask-number" class="mask-phone-number form-textbox validate[Fill Mask]" data-defaultvalue="" autoComplete="section-input_4 tel-national" style="width:310px" data-masked="true" placeholder="Phone Number (optional)" data-component="phone" aria-labelledby="label_4 sublabel_4_masked" value="" /><label class="form-sub-label" for="input_4_full" id="sublabel_4_masked" style="min-height:13px">Please enter a valid phone number.</label></span> </div>
      </li>
      <li class="form-line" data-type="control_textbox" id="id_5"><label class="form-label form-label-top form-label-auto" id="label_5" for="input_5" aria-hidden="true"> </label>
        <div id="cid_5" class="form-input-wide" data-layout="half"> <input type="text" id="input_5" name="q5_typeA" data-type="input-textbox" class="form-textbox" data-defaultvalue="" style="width:310px" size="310" placeholder="Note (optional)" data-component="textbox" aria-labelledby="label_5" value="" /> </div>
      </li>
      <li class="form-line" data-type="control_button" id="id_2">
        <div id="cid_2" class="form-input-wide" data-layout="full">
          <div data-align="center" class="form-buttons-wrapper form-buttons-center   jsTest-button-wrapperField"><button id="input_2" type="submit" class="form-submit-button submit-button jf-form-buttons jsTest-submitField" data-component="button" data-content="">Submit</button></div>
        </div>
      </li>
      <li style="display:none">Should be Empty: <input type="text" name="website" value="" type="hidden" /></li>
    </ul>
  </div>
  <script>
    JotForm.showJotFormPowered = "0";
  </script>
  <script>
    JotForm.poweredByText = "Powered by Jotform";
  </script><input type="hidden" class="simple_spc" id="simple_spc" name="simple_spc" value="241003539658053" />
  <script type="text/javascript">
    var all_spc = document.querySelectorAll("form[id='241003539658053'] .si" + "mple" + "_spc");
    for (var i = 0; i < all_spc.length; i++)
    {
      all_spc[i].value = "241003539658053-241003539658053";
    }
  </script>
</form><script type="text/javascript">JotForm.ownerView=true;</script><script type="text/javascript">JotForm.isNewSACL=true;</script>
