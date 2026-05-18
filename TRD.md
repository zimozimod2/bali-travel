<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>발리 사누르, 온전한 쉼의 시작</title>
    <!-- CSS 연결 -->
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <!-- 1. Hero Section (최상단 비주얼) -->
    <header class="hero-section">
        <div class="header-top">
            <span class="logo">Sanur Travel</span>
            <!-- 다크모드 토글 버튼 -->
            <button id="theme-toggle" class="theme-btn" aria-label="화면 모드 변경">🌙 Dark</button>
        </div>
        <div class="hero-content fade-in-element">
            <h1>쉼표가 필요한 당신에게,<br>가장 발리다운 평온함을 선물합니다.</h1>
            <p>관광객으로 북적이는 곳을 벗어나 잔잔한 파도와 함께하는 사누르의 여유</p>
            <a href="#cta-form" class="cta-button">지금 힐링 시작하기</a>
        </div>
    </header>

    <main>
        <!-- 2. Special Benefits Section (특별 혜택) -->
        <section class="benefits-section fade-in-element">
            <h2>사누르가 선사하는 특별한 휴식</h2>
            <div class="benefit-grid">
                <div class="benefit-card">
                    <h3>🌅 프라이빗 일출 요가</h3>
                    <p>매일 아침 잔잔한 사누르 해변을 바라보며 몸과 마음을 깨우는 정화의 시간</p>
                </div>
                <div class="benefit-card">
                    <h3>🌿 최고급 스파 & 웰니스</h3>
                    <p>천연 아로마 오일과 전통 발리니스 마사지로 일상의 피로를 깊숙이 풀어냅니다.</p>
                </div>
                <div class="benefit-card">
                    <h3>☕ 로컬 카페 & 슬로우 라이프</h3>
                    <p>유러피안 감성이 묻어나는 사누르 거리를 거닐며 즐기는 여유로운 커피 한 잔</p>
                </div>
            </div>
        </section>

        <!-- 3. Review Section (여행자 후기 슬라이더) -->
        <section class="review-section fade-in-element">
            <h2>먼저 다녀온 분들의 힐링 이야기</h2>
            <div class="slider-container">
                <div class="slider-wrapper" id="slider-wrapper">
                    <!-- 후기 카드 1 -->
                    <div class="review-card">
                        <p class="review-text">"발리 여행 중 사누르에서의 3일이 가장 기억에 남아요. 시끄러운 오토바이 소리 대신 파도 소리를 들으며 온전히 쉴 수 있었습니다."</p>
                        <span class="review-author">- 직장인 김OO 님 (30대)</span>
                    </div>
                    <!-- 후기 카드 2 -->
                    <div class="review-card">
                        <p class="review-text">"부모님 모시고 다녀왔는데 동네가 평화롭고 깨끗해서 너무 좋아하셨어요. 일출 요가 프로그램은 꼭 신청하세요!"</p>
                        <span class="review-author">- 프리랜서 이OO 님 (20대)</span>
                    </div>
                    <!-- 후기 카드 3 -->
                    <div class="review-card">
                        <p class="review-text">"정말 오랜만에 아무 생각 없이 책 읽고 수영하며 시간을 보냈네요. 힐링이라는 단어에 가장 잘 어울리는 장소입니다."</p>
                        <span class="review-author">- 사업가 박OO 님 (40대)</span>
                    </div>
                </div>
                <!-- 슬라이더 컨트롤 버튼 -->
                <button class="slider-btn prev-btn" id="prev-btn">❮</button>
                <button class="slider-btn next-btn" id="next-btn">❯</button>
            </div>
        </section>

        <!-- 4. Process Section (상담 프로세스) -->
        <section class="process-section fade-in-element">
            <h2>당신의 완벽한 쉼을 위한 여정</h2>
            <div class="process-steps">
                <div class="step">
                    <span class="step-num">01</span>
                    <h3>맞춤형 상담 신청</h3>
                    <p>아래 폼에 간단한 정보를 남겨주시면 담당자가 배정됩니다.</p>
                </div>
                <div class="step">
                    <span class="step-num">02</span>
                    <h3>1:1 프라이빗 컨설팅</h3>
                    <p>고객님의 연령대와 취향에 딱 맞는 사누르 맞춤 일정을 설계합니다.</p>
                </div>
                <div class="step">
                    <span class="step-num">03</span>
                    <h3>평온한 여행 출발</h3>
                    <p>복잡한 준비 없이 예약부터 케어까지 안심하고 떠나세요.</p>
                </div>
            </div>
        </section>

        <!-- 5. CTA/Lead Form Section (상담 신청 폼) -->
        <section id="cta-form" class="cta-section fade-in-element">
            <div class="form-container">
                <h2>사누르에서 쉼표를 찍어보세요</h2>
                <p>상담 신청을 남겨주시면 맞춤형 힐링 여행 상품 정보를 보내드립니다.</p>
                
                <form id="lead-form">
                    <div class="input-group">
                        <label for="user-name">이름</label>
                        <input type="text" id="user-name" required placeholder="성함을 입력해주세요">
                    </div>
                    <div class="input-group">
                        <label for="user-tel">연락처</label>
                        <input type="tel" id="user-tel" required placeholder="010-XXXX-XXXX">
                    </div>
                    <div class="input-group">
                        <label for="user-age">연령대</label>
                        <select id="user-age" required>
                            <option value="" disabled selected>연령대를 선택해주세요</option>
                            <option value="20">20대</option>
                            <option value="30">30대</option>
                            <option value="40">40대</option>
                            <option value="50">50대 이상</option>
                        </select>
                    </div>
                    <button type="submit" class="submit-button">안내 자료 및 상담 신청하기</button>
                </form>
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; 2026 Sanur Travel. All rights reserved.</p>
    </footer>

    <!-- 자바스크립트 연결 -->
    <script src="js/main.js"></script>
</body>
</html>