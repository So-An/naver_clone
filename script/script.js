$('document').ready(function () {

  /*뉴스 헤드라인 롤링*/
  let flashHeight = $('.main_lt__newsFlash_box li').height();
  let num = $('.main_lt__newsFlash_box li').length;
  let max = flashHeight * num;
  let move = 0;

  function rollingTop() {
    move += flashHeight;
    $('.main_lt__newsFlash_box').animate({
      "top": -move
    }, 500, function () {
      if (move >= max) {
        $(this).css("top", 0);
        move = 0;
      }
    })
  }
  setInterval(rollingTop, 3000);



  /*이슈 롤링 외않되?_? 잉? 어잉? 으잉/??*/
  let issueFlashHeight = $('.issue_list li').height();
  let issueNum = $('.issue_list li').length;
  let issueMax = issueFlashHeight * issueNum;
  let issueMove = 0;

  function issueRollingTop() {
    issueMove += issueFlashHeight;
    $('.issue_list').animate({
      "top": -issueMove
    }, 500, function () {
      if (issueMove >= issueMax) {
        $(this).css("top", 0);
        issueMove = 0;
      }
    })
  }
  setInterval(issueRollingTop, 3000);


  /*=======================================================*/
  let originalHtml;
  let changeHtml = `
    <div class="press_box_hover">
        <div class="press_subscribe">구독</div>
        <div class="press_view">기사보기</div>
    </div>`;

  $('.main_lt__press_box a').mouseenter(function () {
    let pressArry = [
      ['1', '2', '3', '4', '5', '6'],
      ['7', '8', '9', '10', '11', '12'],
      ['13', '14', '15', '16', '17', '18'],
      ['19', '20', '21', '22', '23', '24']
    ];
    let ulIdx = $(this).parent().index();
    let liIdx = $(this).index();
    originalHtml = '<img src="images/press_icon/press_' + pressArry[ulIdx][liIdx] + '.png">'
    $(this).html(changeHtml);
  })

  $('.main_lt__press_box a').mouseout(function () {
    $(this).html(originalHtml);
  })
});

function loggin() {
  document.getElementById('loggin_area').innerHTML = loginHtml;
  document.getElementById('loggin_area').classList.add('active');

  $('.loggin_bottom > a').click(function () {
    $(this).toggleClass('active');
    $(this).siblings().removeClass('active');
    $('.my_service').css('display', 'block');
    $('.issue_box').css('display', 'none');
    $('.sub_ad_banner').css('display', 'none');

  });
}


function loggout() {
  document.getElementById('loggin_area').innerHTML = logoutHtml;
  document.getElementById('loggin_area').classList.remove('active');
  $('.my_service').css('display', 'none');
  $('.issue_box').css('display', 'block');
    $('.sub_ad_banner').css('display', 'block');
}


let logoutHtml = `<div id="logout_state">
    <p>네이버를 더 안전하고 편리하게 이용하세요</p>
    <button  onclick="loggin()"><span>NAVER</span>로그인</button>
    <ul class="login_links">
      <li><a href="#">아이디</a></li>
      <li><a href="#">비밀번호 찾기</a></li>
      <li><a href="#">회원가입</a></li>
    </ul> 
  </div>`;
let loginHtml = `<div id="loggin_state">
    <div class="loggin_box">
      <div class="loggin_top">
        <div class="loggin_pf">
          프로필이미지
          <div class="loggin_pf_option">
          </div>
        </div>
        <div class="loggin_info">
          <div class="loggin_info_top">
            <div class="loggin_my">
              <ul>
                <li>넴모빔</li>
                <li>네이버ID <img src="images/login_security_icon.png" alt="보안아이콘"></li>
              </ul>
              <ul>
                <li>nemonemo@email.com</li>
              </ul>
            </div>
            <div class="loggin_btn">
              <a href="#" id="loggout" onclick="loggout()">로그아웃</a>
            </div>
          </div>
          <div class="loggin_info_bottom">
            <ul>
              <li><a href="#">메일<span>16</span></a></li>
              <li><a href="#">쪽지<span>214</span></a></li>
              <li><a href="#"><img src="images/naver_plus_icon.png" alt="네이버플러스">시작하기</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="loggin_bottom">
        <a href="#">알림</a>
        <a href="#">구독</a>
        <a href="#">메일</a>
        <a href="#">카페</a>
        <a href="#">블로그</a>
      </div>
    </div>
  </div>`
