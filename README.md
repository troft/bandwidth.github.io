<div id="hero">
  <div class="heroImage"></div>
  <h1 class="remove4mobile">TRY BEFORE YOU BUY: HOW WELL DOES YOUR SOFTWARE COMMUNICATE?</h1>
  <h2 class="mobileShow">TRY BEFORE YOU BUY: HOW WELL DOES YOUR SOFTWARE COMMUNICATE?</h2>
  <p>Take a look at our code samples below. If your app would benefit from text messaging or dependable phone call capability, look no further. We can solve your problem just like we’ve done for everyone from application start-ups and traditional telecom companies to some of the most demanding Internet giants in the business. Have a look around or <a href="http://www.bandwidth.com/resources/tip-sheet-why-bandwidths-apis-are-better/">Learn more.</a></p><br>
  <div class="cardsContainer">
    <div id="smscard" class="devCards sms active">
      <h2><img src="https://www.bandwidth.com/wp-content/themes/bandwidth/assets/media/icon-messaging.svg" alt="Messaging icon" class="product--icon"> <span class="remove4mobile">Messaging</span></h2>
      <span class="remove4mobile">Communication at its most basic. Adding SMS or MMS is a snap.
      <br><br></span><button class="iconic-button iconic-small" id="smsexpand"><i class="icons8-expand-arrow"></i></button><a href="/howto/sendSMSMMS.html" class="aimg"><button class="fulltut" id="smsfulltut" disabled>Learn more</button></a>
    </div><div id="voicecard" class="devCards voice">
      <h2><img src="https://www.bandwidth.com/wp-content/themes/bandwidth/assets/media/icon-voice.svg" alt="Voice icon" class="product--icon"> <span class="remove4mobile">Voice</span></h2>
      <span class="remove4mobile">“Watson, come here—I need Bandwidth!” You can say stuff like that once you add calling.
      <br><br></span><button class="iconic-button iconic-small" id="voiceexpand"><i class="icons8-expand-arrow"></i></button><a href="/howto/outboundCall.html" class="aimg"><button class="fulltut" id="voicefulltut" disabled>Learn more</button></a>
    </div><div id="pncard"class="devCards pn">
      <h2><img src="https://www.bandwidth.com/wp-content/themes/bandwidth/assets/media/icon-phonenumbers.svg" alt="Phone Numbers icon" class="product--icon"> <span class="remove4mobile">Numbers</span></h2>
      <span class="remove4mobile">We’ve got your number. In fact, we have as many of them as you want.
      <br><br></span><button class="iconic-button iconic-small" id="pnexpand"><i class="icons8-expand-arrow"></i></button><a href="/howto/buytn.html" class="aimg"><button class="fulltut" id="pnfulltut" disabled>Learn more</button></a>
    </div>
  </div>
</div>

<div class="languageselector">
      <div class="radio-group clearfix">
          <input type="radio" name="basic-options" value="four" id="radio-four" class="lang-bash trigger" data-rel="lang-bash" checked />
          <label for="radio-four"><span>curl</span></label>
          <input type="radio" name="basic-options" value="one" id="radio-one" class="lang-js trigger" data-rel="lang-js"/>
          <label for="radio-one"><span>js</span></label>
          <input type="radio" name="basic-options" value="two" id="radio-two" class="lang-csharp trigger" data-rel="lang-csharp"/>
          <label for="radio-two"><span>c#</span></label>
          <input type="radio" name="basic-options" value="three" id="radio-three" class="lang-ruby trigger" data-rel="lang-ruby"/>
          <label for="radio-three"><span>ruby</span></label>
          <input type="radio" name="basic-options" value="five" id="radio-five" class="lang-python trigger" data-rel="lang-python"/>
          <label for="radio-five"><span>python</span></label>
      </div>
   </div>

<div class="divider"></div>

### Send a message

```js
client.Message.send({
    from : "+19195551212",
    to   : "+19195551213",
    text : "Thank you for subscribing to Unicorn Enterprises!"
})
.then(function(message){
    console.log(message.id);
});
```

```csharp
var message = await client.Message.SendAsync(new MessageData {
    From = "+19195551212",
    To = "+19195551213",
    Text = "Thank you for subscribing to Unicorn Enterprises!"
});
```

```ruby
message = Message.create(client, {
    :from => "+19195551212",
    :to => "+19195551213",
    :text => "Thank you for subscribing to Unicorn Enterprises!"
})
```

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/messages \
    -u {token}:{secret} \
    -H "Content-type: application/json" \
    -d \
    '
    {
        "from": "{fromNumber}",
        "to": "{toNumber}",
        "text": "Good morning, this is a test message"
    }'
```

```python
message_id = messaging_api.send_message(from_ = '+1234567980',
                                        to    = '+1234567981',
                                        text  = 'SMS message')
print(message_id)
# m-messageId
```

### Make a call

```js
client.Call.create({
    from: "{fromNumber}",
    to: "{toNumber}"
})
.then(function (call) {
    console.log(call.id);
})
```

```csharp
var call = await client.Call.CreateAsync(new CreateCallData{
    From = "{fromNumber}",
    To = "{toNumber}"
});
```

```ruby
call = Call.create(client, {:from => "{fromNumber}", :to => "{toNumber}"})
```

```bash
curl -v -X POST https://api.catapult.inetwork.com/v1/users/{userId}/calls \
    -u {token}:{secret} \
    -H "Content-type: application/json" \
    -d \
    '
    {
        "from": "{fromNumber}",
        "to": "{toNumber}"
    }'
```
```python
import bandwidth
voice_api = bandwidth.client('voice', 'u-user', 't-token', 's-secret')
call_id = voice_api.create_call(from_        = '+1234567890',
                                to           = '+1234567891',
                                callback_url = "http://yoursite.com/calls"
)
print(call_id)
## c-abc123

```
### Buy a telephone number

```bash
curl -v -X POST  https://api.catapult.inetwork.com/v1/availableNumbers/local?city=Cary&state=NC&quantity=2 \
  -u {token}:{secret} \
  -H "Content-type: application/json"
```

```js
// Search available local phone numbers with area code 910
client.AvailableNumber.search("local", { areaCode : "910", quantity : 1 })
.then(function (numbers) {
    return client.PhoneNumber.create({
        number        : numbers[0].number,
        name          : "My 910 Number",
        applicationId : "a-1234"
    });
})
.then(function (number) {
    console.log(number.id);
});
```

```csharp
var results = await client.AvailableNumber.SearchLocalAsync(new LocalNumberQuery{ AreaCode = "910", Quantity = 1});
var number = await client.PhoneNumber.CreateAsync(new CreatePhoneNumberData {
    Number        = results[0].number,
    Name          = "My 910 Number",
    ApplicationId = "a-1234"
});
```

```ruby
numbers = AvailableNumber.search_local(client, {:area_code => "910", :quantity => 1})
puts("Found numbers: #{(numbers.map {|n| n[:number]}).join(', ')}")
number = PhoneNumber.create(client, {:number => numbers[0][:number]})
puts("Now you are owner of number #{number.number} (id #{number.id})")
```

```python
import bandwidth
account_api = bandwidth.client('account', 'u-user', 't-token', 's-secret')
numbers     = account_api.search_available_local_numbers(area_code = '910', quantity = 3)
my_number   = api.create_phone_number(numbers[0]['number'])

print(my_number)
#+19104440230
```

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script>
$(document).ready(function landing(){
  if ($(window).width() >= 980) {

  // Adding classes for sms, voice and pns
  $('#send-a-message').nextUntil('h3').addClass('smstut');
  $('#send-a-message').addClass('smstut');
  $('#make-a-call').nextUntil('h3').addClass('voicetut');
  $('#make-a-call').addClass('voicetut');
  $('#buy-a-telephone-number').nextUntil('div').addClass('pntut');
  $('#buy-a-telephone-number').addClass('pntut');

  // Access to parent div on this page only
  $('#hero').parent().addClass('landingpage');

  // Setting default language
  $('.lang-bash').parent().addClass('active');

  // Toggle between languages
  $('code').not('.lang-bash').parent().hide();
  $('li pre').show();
  $('.trigger').click(function() {
      $('code').parent().removeClass('active');
      $('.' + $(this).data('rel')).parent().addClass('active');

      if ($('#voicecard').hasClass('active')){
        tuts.hide();
        $('.voicetut.active').show();
      }
      if ($('#smscard').hasClass('active')){
        tuts.hide();
        $('.smstut.active').show();
      } else if ($('#pncard').hasClass('active')){
        tuts.hide();
        $('.pntut.active').show();
      }
  });

  // Showing proper code sample or sms, voice and pns
  var tuts = $('.voicetut, .smstut, .pntut');

  tuts.hide();

  // Disable buttons on cards that are inactive
  $('.devCards.active').find('.fulltut').prop("disabled",false);

  $('#smsexpand').click(function(){
      tuts.hide();
      $('.smstut.active').show();
      $('.devCards').removeClass('active');
      $(this).parent().addClass('active');
      $('.devCards').find('.fulltut').prop("disabled",true);
      $('.devCards.active').find('.fulltut').prop("disabled",false);
  });
  $('#voiceexpand').click(function(){
      tuts.hide();
      $('.voicetut.active').show();
      $('.devCards').removeClass('active');
      $(this).parent().addClass('active');
      $('.devCards').find('.fulltut').prop("disabled",true);
      $('.devCards.active').find('.fulltut').prop("disabled",false);
  });

  $('#pnexpand').click(function(){
      tuts.hide();
      $('.pntut.active').show();
      $('.devCards').removeClass('active');
      $(this).parent().addClass('active');
      $('.devCards').find('.fulltut').prop("disabled",true);
      $('.devCards.active').find('.fulltut').prop("disabled",false);
  });
  $('.smstut.active').show();

  // Mobile
  } else {
    // Adding classes for sms, voice and pns
    <!-- $('.book-summary, .book-body').addClass('mobile'); -->
    $('#send-a-message').nextUntil('h3').addClass('smstut');
    $('#send-a-message').addClass('smstut');
    $('#make-a-call').nextUntil('h3').addClass('voicetut');
    $('#make-a-call').addClass('voicetut');
    $('#buy-a-telephone-number').nextUntil('div').addClass('pntut');
    $('#buy-a-telephone-number').addClass('pntut');

    // Access to parent div on this page only
    $('#hero').parent().addClass('landingpage');

    // Setting default language
    $('.lang-bash').parent().addClass('active');

    // Toggle between languages
    $('code').not('.lang-bash').parent().hide();
    $('li pre').show();
    $('.trigger').click(function() {
        $('code').parent().removeClass('active');
        $('.' + $(this).data('rel')).parent().addClass('active');

        if ($('#voicecard').hasClass('active')){
          tuts.hide();
          $('.voicetut.active').show();
        }
        if ($('#smscard').hasClass('active')){
          tuts.hide();
          $('.smstut.active').show();
        } else if ($('#pncard').hasClass('active')){
          tuts.hide();
          $('.pntut.active').show();
        }
    });

    // Showing proper code sample or sms, voice and pns
    var tuts = $('.voicetut, .smstut, .pntut');

    tuts.hide();

    // Disable buttons on cards that are inactive
    $('.devCards.active').find('.fulltut').prop("disabled",false);

    $('#smscard').click(function(){
        tuts.hide();
        $('.smstut.active').show();
        $('.devCards').removeClass('active');
        $(this).addClass('active');
        $('.devCards').find('.fulltut').prop("disabled",true);
        $('.devCards.active').find('.fulltut').prop("disabled",false);
    });
    $('#voicecard').click(function(){
        tuts.hide();
        $('.voicetut.active').show();
        $('.devCards').removeClass('active');
        $(this).addClass('active');
        $('.devCards').find('.fulltut').prop("disabled",true);
        $('.devCards.active').find('.fulltut').prop("disabled",false);
    });

    $('#pncard').click(function(){
        tuts.hide();
        $('.pntut.active').show();
        $('.devCards').removeClass('active');
        $(this).addClass('active');
        $('.devCards').find('.fulltut').prop("disabled",true);
        $('.devCards.active').find('.fulltut').prop("disabled",false);
    });
    $('.smstut.active').show();
  }
});
</script>
