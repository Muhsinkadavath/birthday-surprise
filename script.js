// Birthday Surprise — tricky "No" buttons & smooth experience

(function () {
  'use strict';

  // ----- Why I love you — infinite reasons -----
  var reasons = [
    'Your smile is the first thing I want to see every morning.',
    'You laugh at my dumb jokes like they\'re actually funny.',
    'You make boring errands feel like a date.',
    'You remember the little things I say.',
    'Your voice calms me down when I\'m stressed.',
    'You push me to be better without making me feel less.',
    'You look at me like I\'m the only person in the room.',
    'You forgive me when I mess up.',
    'You dance with me even when there\'s no music.',
    'You believe in me more than I believe in myself.',
    'You\'re my favourite person to do nothing with.',
    'You get my weird sense of humour.',
    'You\'re kind to people who don\'t deserve it.',
    'You make ordinary days feel special.',
    'You\'re the reason I look forward to coming home.',
    'You give the best hugs.',
    'You\'re brave even when you\'re scared.',
    'You listen when I need to vent.',
    'You celebrate my wins like they\'re your own.',
    'You\'re beautiful when you wake up with messy hair.',
    'You don\'t run when things get hard.',
    'You make me want to be the person you think I am.',
    'You\'re my favourite adventure buddy.',
    'You sing even when you don\'t know the words.',
    'You care about my family and friends.',
    'You\'re the best part of my day, every day.',
    'You make me feel safe to be myself.',
    'You\'re stubborn in the cutest way.',
    'You surprise me in small, sweet ways.',
    'You\'re the only one I want to annoy for the rest of my life.',
    'You turn bad days into okay days.',
    'You\'re my favourite notification.',
    'You don\'t give up on us.',
    'You make plans with me like I\'m part of your future.',
    'You\'re the reason I believe in love.',
    'You\'re strong even when you don\'t feel it.',
    'You make boring food taste better when we eat together.',
    'You\'re the person I want to tell everything to first.',
    'You see the good in me when I can\'t.',
    'You\'re my home.',
    'You make me want to be a better person.',
    'You\'re weird in all the right ways.',
    'You\'re the best decision I never had to think about.',
    'You make rainy days feel cozy.',
    'You fight fair when we disagree.',
    'You\'re the first person I want to share good news with.',
    'You make me feel chosen every single day.',
    'You\'re my favourite hello and my hardest goodbye.',
    'You still give me butterflies.',
    'You make forever feel too short.',
    'You\'re the reason my heart feels full.',
    'You make ordinary moments feel like memories.',
    'You\'re the person I want to grow old with.',
    'You make me laugh until my stomach hurts.',
    'You\'re kind to yourself and that teaches me to be too.',
    'You\'re the best thing that ever happened to me.',
    'You make every place feel like ours.',
    'You\'re my favourite place to be.',
    'You don\'t let me get away with being lazy (in a good way).',
    'You make me want to wake up early just to see you.',
    'You\'re the reason I believe in us.',
    'You make small gestures feel huge.',
    'You\'re the one I want to do life with.',
    'You make my heart do that thing.',
    'You\'re worth every mile, every wait, every effort.',
    'You make me feel like the luckiest person alive.',
    'You\'re my person.',
    'You make love feel easy and real.',
    'You\'re the reason I smile for no reason.',
    'You make every "I love you" feel like the first time.',
    'You\'re the answer to prayers I didn\'t know I had.',
    'You make forever sound like a good idea.',
    'You\'re the one I want to annoy forever.',
    'You make ordinary love feel extraordinary.',
    'You\'re my favourite chapter in every story.',
    'You make me want to give you the world.',
    'You\'re the reason I believe in happy endings.',
    'You make every day with you feel like a gift.',
    'You\'re the love I didn\'t know I was waiting for.',
    'You make my life make sense.',
    'You\'re the one I choose, again and again.',
    'You make "us" the best word in my vocabulary.',
    'You\'re the reason I write lists like this.',
    'You make love feel infinite.',
    'You\'re my favourite reason to smile.',
    'You make every moment with you count.',
    'You\'re the one I want to build a life with.',
    'You make my heart skip a beat.',
    'You\'re the best surprise life ever gave me.',
    'You make "forever" feel too short.',
    'You\'re the reason I believe in soulmates.',
    'You make every love song about you.',
    'You\'re the one I want to wake up next to for the rest of my life.',
    'You make love feel like the easiest and hardest thing at once.',
    'You\'re my favourite "yes" I ever said.',
    'You make every day feel like a new chance to love you more.',
    'You\'re the one who makes everything worth it.',
    'You make my world brighter.',
    'You\'re the love of my life.',
    'You make "I love you" feel like not enough.',
    'You\'re the one I want to grow with.',
    'You make every reason on this list feel true.',
    'You\'re the reason this list could go on forever.',
    'You make me believe that love is real.',
    'You\'re the one I want to hold when we\'re old and grey.',
    'You make every second with you precious.',
    'You\'re my forever and always.',
    'You make this list infinite, just like my love for you.'
  ];

  var reasonsIndex = 0;
  var reasonsPerClick = 10;
  var listEl = document.getElementById('reasons-list');
  var btnMore = document.getElementById('btn-more-reasons');

  function addMoreReasons() {
    if (!listEl) return;
    var fragment = document.createDocumentFragment();
    var end = Math.min(reasonsIndex + reasonsPerClick, reasons.length);
    for (var i = reasonsIndex; i < end; i++) {
      var li = document.createElement('li');
      li.className = 'reason-item';
      li.textContent = reasons[i];
      fragment.appendChild(li);
    }
    listEl.appendChild(fragment);
    reasonsIndex = end;
    if (reasonsIndex >= reasons.length && btnMore) {
      btnMore.textContent = 'No more — my love is infinite though 💕';
      btnMore.disabled = true;
      btnMore.classList.add('all-done');
    }
  }

  function initReasons() {
    addMoreReasons();
    if (btnMore) {
      btnMore.addEventListener('click', function () {
        if (reasonsIndex < reasons.length) addMoreReasons();
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initReasons);
  } else {
    initReasons();
  }

  // ----- One question: forever + marry me -----
  var yesBtn = document.getElementById('yes-one');
  var noBtn = document.getElementById('no-one');
  var answerMsg = document.getElementById('answer-msg');

  if (yesBtn) {
    yesBtn.addEventListener('click', function () {
      answerMsg.textContent = "Forever it is. I love you. Now let's eat cake. 🎂💍💕";
      answerMsg.classList.remove('hidden');
      if (noBtn) noBtn.style.visibility = 'hidden';
      yesBtn.style.position = 'static';
      yesBtn.style.transform = 'none';
    });
  }

  // ----- Gift section: surprise — my image only shows when she clicks -----
  (function () {
    var btn = document.getElementById('gift-surprise-btn');
    var reveal = document.getElementById('gift-surprise-reveal');
    if (btn && reveal) {
      btn.addEventListener('click', function () {
        reveal.classList.remove('hidden');
        btn.textContent = 'That’s me — and I’m all yours 💕';
        btn.disabled = true;
        btn.classList.add('surprise-done');
      });
    }
  })();

  makeNoRunAway(noBtn, function () {
    if (answerMsg) {
      answerMsg.textContent = "That button doesn't work. Try the other one. 😏";
      answerMsg.classList.remove('hidden');
      setTimeout(function () {
        answerMsg.classList.add('hidden');
        answerMsg.textContent = '';
      }, 2200);
    }
  });

  /**
   * Makes the "No" button run away when hovered or when the user tries to click it.
   * @param {HTMLElement} btn - The No button element
   * @param {function} onAttempt - Called when she tries to click No (optional)
   */
  function makeNoRunAway(btn, onAttempt) {
    if (!btn) return;

    var container = btn.closest('.button-group');
    var maxX = 200;
    var maxY = 80;

    function randomOffset() {
      return {
        x: (Math.random() - 0.5) * 2 * maxX,
        y: (Math.random() - 0.5) * 2 * maxY
      };
    }

    function moveButton() {
      var o = randomOffset();
      btn.style.left = (50 + (Math.random() - 0.5) * 30) + '%';
      btn.style.top = (50 + (Math.random() - 0.5) * 20) + '%';
      btn.style.transform = 'translate(-50%, -50%) translate(' + o.x + 'px, ' + o.y + 'px)';
    }

    // Run away on mouse enter (hover)
    btn.addEventListener('mouseenter', function () {
      moveButton();
    });

    // Also run away on click attempt — so even if she gets close, it moves
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      moveButton();
      if (typeof onAttempt === 'function') onAttempt();
    });

    // Touch devices: move on touch start so it's hard to tap "No"
    btn.addEventListener('touchstart', function (e) {
      e.preventDefault();
      moveButton();
      if (typeof onAttempt === 'function') onAttempt();
    }, { passive: false });
  }
})();
