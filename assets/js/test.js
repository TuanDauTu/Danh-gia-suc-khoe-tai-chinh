/* 
  Logic cho bài kiểm tra sức khỏe tài chính
  Phong cách: Nhẹ nhàng, không phán xét.
*/

// Dữ liệu câu hỏi mới (12 câu, thang điểm 1-7)
const questions = [
    // HẠNG MỤC 1 - CHI PHÍ
    {
        id: 1,
        text: "Trong 6 tháng gần đây, Tỷ lệ Tổng Chi Phí / Tổng Thu Nhập trung bình của Anh/Chị là?",
        explanation: "Khía cạnh này đo sức khỏe chi tiêu và tiết kiệm – không phụ thuộc Anh/Chị kiếm được bao nhiêu, mà phụ thuộc anh giữ lại được bao nhiêu.<br><br>Ví dụ: Thu nhập 20 triệu / tháng.<br>Chi 22 triệu -> 110% -> Cấp 1<br>Chi 14-18 triệu -> 70%-90% -> Cấp 3<br>Chi 10-12 triệu -> 50-60% -> Cấp 5",
        options: [
            { text: "Trên 110% – Chi tiêu vượt thu nhập, thường xuyên bù bằng vay mượn", value: 1 },
            { text: "90% - 110% – Gần như tiêu hết thu nhập, rất khó dư", value: 2 },
            { text: "70% - 90% – Có dư nhưng mỏng, dễ mất cân bằng", value: 3 },
            { text: "60% - 70% – Kiểm soát chi tiêu tốt, có tích lũy đều", value: 4 },
            { text: "50% - 60% – Chi tiêu gọn, tiết kiệm và đầu tư chủ động", value: 5 },
            { text: "30% - 50% – Chi tiêu thấp so với thu nhập, rất chủ động", value: 6 },
            { text: "Dưới 30% – Chi tiêu không còn là áp lực", value: 7 }
        ]
    },
    {
        id: 2,
        text: "Anh/Chị Lập kế hoạch và theo dõi chi tiêu hàng tháng như thế nào?",
        explanation: "Đánh giá thói quen quản lý tiền bạc. Kế hoạch không cần phức tạp, nhưng cần sự hiện diện của ý thức trước khi tiêu tiền.",
        options: [
            { text: "Tiền về là tiêu, thường xuyên không biết tiền đã đi đâu", value: 1 },
            { text: "Tiêu theo cảm giác, cuối tháng mới 'giật mình' vì hết tiền", value: 2 },
            { text: "Có ghi chép chi tiêu nhưng làm cho có, không đều", value: 3 },
            { text: "Có kế hoạch chi tiêu trước khi tiêu, kiểm soát được khoản chính", value: 4 },
            { text: "Chi tiêu theo ngân sách, biết điều chỉnh khi sai lệch", value: 5 },
            { text: "Hệ thống chi tiêu vận hành gần như tự động", value: 6 },
            { text: "Chi tiêu phản ánh đúng con người và giá trị sống", value: 7 }
        ]
    },
    {
        id: 3,
        text: "Cảm giác chung của Anh/Chị với chi tiêu hàng tháng là?",
        explanation: "Cảm xúc là chỉ báo trung thực nhất của tiềm thức về mối quan hệ giữa bạn và tiền bạc.",
        options: [
            { text: "Luôn căng thẳng, lo sợ vì tiền, tiêu là thấy xót xa", value: 1 },
            { text: "Thường xuyên áp lực, chi tiêu trong tâm thế phòng thủ", value: 2 },
            { text: "Đỡ lo hơn nhưng vẫn phải dè chừng khi tiêu tiền", value: 3 },
            { text: "Tương đối yên tâm, chi tiêu có kiểm soát", value: 4 },
            { text: "Thoải mái, chủ động khi chi tiêu theo kế hoạch", value: 5 },
            { text: "Điềm tĩnh, tiền không còn là nguồn stress", value: 6 },
            { text: "Nhẹ nhõm, chi tiêu gắn với giá trị và mục tiêu sống", value: 7 }
        ]
    },

    // HẠNG MỤC 2 - THU NHẬP
    {
        id: 4,
        text: "Thu nhập thụ động (từ Tiết kiệm và Đầu tư) của Anh/Chị có thể chi trả được bao nhiêu phần trăm chi phí?",
        explanation: "Thang đo này đo mức độ độc lập của dòng tiền. Không phụ thuộc anh làm việc chăm chỉ thế nào, mà phụ thuộc tài sản làm việc thay cho anh đến đâu.<br><br>Ví dụ: Chi phí thiết yếu: 10 triệu/tháng. <br>Tổng chi phí: 15 triệu/tháng.<br>- Nếu thu nhập thụ động (lãi, thuê nhà...): <br>từ 0-1 triệu -> 0-10% chi phí thiết yếu -> Cấp 2.<br>từ 2-5 triệu -> 20%-50% chi phí thiết yếu -> Cấp 4.<br>trên 10 triệu -> 100% chi phí thiết yếu -> Cấp 6.",
        options: [
            { text: "0% – Không có thu nhập thụ động", value: 1 },
            { text: "Chi trả được 0%-10% chi phí thiết yếu", value: 2 },
            { text: "Chi trả được 10%-20% chi phí thiết yếu", value: 3 },
            { text: "Chi trả được 20%-50% chi phí thiết yếu", value: 4 },
            { text: "Chi trả được 50%-100% chi phí thiết yếu", value: 5 },
            { text: "Chi trả được Trên 100% chi phí thiết yếu", value: 6 },
            { text: "Chi trả được Trên 100% tổng chi phí sinh hoạt", value: 7 }
        ]
    },
    {
        id: 5,
        text: "Mức thu nhập từ lương so với mặt bằng trung bình chung của ngành nghề của Anh/Chị?",
        explanation: "Thang đo này không yêu cầu con số chính xác, mà đo Vị thế thu nhập của anh/chị trong nghề. Khả năng tạo giá trị -> đòn bẩy kỹ năng -> mức độ thay thế.<br><br>Ví dụ: Nghề văn phòng trung bình nghề 10tr/tháng.<br>- Lương 8-10tr -> Cấp 3.<br>- Lương 13–17 triệu → Cấp 5.<br>- Lương >25 triệu → Cấp 7.",
        options: [
            { text: "Thấp hơn rất nhiều so với mặt bằng chung (< dưới 50%)", value: 1 },
            { text: "Thấp hơn mặt bằng chung (< 50-90%)", value: 2 },
            { text: "Xấp xỉ mức trung bình của nghề (= 90-110%)", value: 3 },
            { text: "Cao hơn trung bình một chút (= 110-140%)", value: 4 },
            { text: "Cao hơn rõ rệt so với trung bình (= 140-170%)", value: 5 },
            { text: "Thu nhập thuộc nhóm cao của nghề (= 170-250%)", value: 6 },
            { text: "Thu nhập vượt trội, thuộc top đầu ngành (>250%)", value: 7 }
        ]
    },
    {
        id: 6,
        text: "Anh/Chị tự đánh giá Mức độ sẵn sàng đầu tư học tập, phát triển bản thân, tìm cách nâng cao thu nhập của bản thân như thế nào?",
        explanation: "Đánh giá tư duy 'Đầu tư cho bản thân'. Đây là khoản đầu tư sinh lời cao nhất nhưng thường bị bỏ qua khi tài chính khó khăn.",
        options: [
            { text: "Gần như không học thêm, chỉ tập trung xoay xở chi tiêu trước mắt", value: 1 },
            { text: "Muốn học nhưng thiếu tiền, thiếu thời gian và dễ bỏ giữa chừng", value: 2 },
            { text: "Thỉnh thoảng học khi thấy cần, chưa có kế hoạch rõ ràng", value: 3 },
            { text: "Có kế hoạch học tập cơ bản để cải thiện thu nhập", value: 4 },
            { text: "Chủ động dành ngân sách và thời gian cố định cho việc học", value: 5 },
            { text: "Xem việc học là khoản đầu tư chiến lược dài hạn", value: 6 },
            { text: "Liên tục học để mở rộng ảnh hưởng, giá trị và đòn bẩy thu nhập", value: 7 }
        ]
    },

    // HẠNG MỤC 3 - TÀI SẢN
    {
        id: 7,
        text: "Tích lũy Tổng tài sản ròng của Anh/Chị lớn hơn bao nhiêu lần Tổng chi phí hàng tháng (năm)?",
        explanation: "Thang đo này đo độ dày của 'Lớp giáp tài chính' – nếu hôm nay Anh/Chị dừng làm việc, tài sản có thể nuôi anh được trong thời gian bao lâu.<br><br>Ví dụ: Chi phí sinh hoạt 15tr/tháng -> 180tr/năm.<br>Tài sản ròng (tiền, vàng, đất, cổ phiếu - nợ):<br>- Tài sản ròng = 120tr-180tr -> đủ sống 6 tháng - 1 năm -> Cấp 3.<br>- Tài sản ròng = 1-2 tỷ -> đủ sống 5-10 năm -> Cấp 5.",
        options: [
            { text: "Dưới 1 tháng chi phí", value: 1 },
            { text: "1 – 6 tháng chi phí", value: 2 },
            { text: "6 – 12 tháng chi phí", value: 3 },
            { text: "1 – 5 năm chi phí", value: 4 },
            { text: "5 – 10 năm chi phí", value: 5 },
            { text: "10 – 25 năm chi phí", value: 6 },
            { text: "Trên 25 năm chi phí", value: 7 }
        ]
    },
    {
        id: 8,
        text: "Cấu trúc tài sản của Anh/Chị hiện nay đang như thế nào?",
        explanation: "Thang đo này đánh giá tài sản đang 'đứng yên', 'tăng giá' hay 'tạo dòng tiền' – tức là tài sản có làm việc cho anh hay không.<br><br>Ví dụ:- Cấp 2: Tiều gửi có 100tr hầu hết gửi ngân hàng.<br>- Cấp 5: Có cổ tức, cho thuê, lãi đều hàng tháng",
        options: [
            { text: "Gần như không có tài sản, hoặc tài sản < nợ", value: 1 },
            { text: "Chủ yếu là tiền mặt, tiết kiệm ngắn hạn", value: 2 },
            { text: "Chủ yếu là tiền tiết kiệm và một số tài sản cơ bản", value: 3 },
            { text: "Chủ yếu là tài sản đầu tư nhưng chưa tạo dòng tiền tốt", value: 4 },
            { text: "Chủ yếu là tài sản tạo dòng tiền ổn định", value: 5 },
            { text: "Danh mục tài sản đa dạng, dòng tiền bền vững", value: 6 },
            { text: "Hệ thống tài sản vận hành gần như tự động", value: 7 }
        ]
    },
    {
        id: 9,
        text: "Anh/Chị có tổng kết tài sản hàng quý (năm) và phân bổ tài sản phù hợp với hoàn cảnh gia đình và tình hình kinh tế thị trường?",
        explanation: "Đo lường sự kiểm soát và tầm nhìn bao quát của bạn đối với bức tranh tài chính tổng thể.",
        options: [
            { text: "Không tổng kết tài sản, cũng không rõ mình đang có gì", value: 1 },
            { text: "Chỉ ước chừng tài sản trong đầu, không ghi chép", value: 2 },
            { text: "Có tổng kết tài sản nhưng làm cho có, không đều", value: 3 },
            { text: "Tổng kết tài sản định kỳ, phân bổ theo thói quen", value: 4 },
            { text: "Tổng kết đều đặn, phân bổ theo mục tiêu rõ ràng", value: 5 },
            { text: "Quản trị tài sản như một hệ thống", value: 6 },
            { text: "Tài sản phản ánh giá trị sống và chiến lược dài hạn", value: 7 }
        ]
    },

    // HẠNG MỤC 4 - NỢ
    {
        id: 10,
        text: "Tỷ lệ Tổng nợ phải trả (cả gốc + lãi) / Tổng thu nhập của Anh/Chị là bao nhiêu?",
        explanation: "Ví dụ minh họa: Nợ phải trả (gốc+lãi) / Tổng thu nhập (tháng).<br><br>Thu nhập 30tr. Trả nợ 18tr -> 60% -> Cấp 1 (Báo động đỏ). Trả nợ 3tr -> 10% -> Cấp 5 (Vững vàng).",
        options: [
            { text: "> 50% thu nhập", value: 1 },
            { text: "30% - 50% thu nhập", value: 2 },
            { text: "20% - 30% thu nhập", value: 3 },
            { text: "10% - 20% thu nhập", value: 4 },
            { text: "0% - 10% thu nhập", value: 5 },
            { text: "Không có nợ hoặc 10% - 30% cho nợ tốt", value: 6 },
            { text: "Không có nợ hoặc 30% - 50% cho nợ tốt + nợ chiến lược", value: 7 }
        ]
    },
    {
        id: 11,
        text: "Mục đích chính của các khoản nợ?",
        explanation: "Phân biệt Nợ Xấu (tiêu sản, mất giá) và Nợ Tốt (tài sản, sinh lời).",
        options: [
            { text: "Vay để trang trải sinh hoạt, vì thiếu hụt", value: 1 },
            { text: "Vay để duy trì cuộc sống hiện tại", value: 2 },
            { text: "Vay cho nhu cầu thiết yếu dài hạn", value: 3 },
            { text: "Vay có tính toán, không gây áp lực", value: 4 },
            { text: "Gần như không vay hoặc vay rất ít", value: 5 },
            { text: "Vay để đầu tư tạo dòng tiền", value: 6 },
            { text: "Vay chiến lược để xây hệ thống tài sản", value: 7 }
        ]
    },
    {
        id: 12,
        text: "Khi nghĩ đến nợ, cảm xúc của Anh/Chị?",
        explanation: "Tâm lý đối với nợ quyết định khả năng kiểm soát nợ. Sợ hãi dẫn đến né tránh, điềm tĩnh dẫn đến giải pháp.",
        options: [
            { text: "Rất lo sợ, né tránh, không muốn nhìn vào nợ", value: 1 },
            { text: "Áp lực thường xuyên, chỉ mong trả xong", value: 2 },
            { text: "Hơi căng thẳng nhưng vẫn kiểm soát được", value: 3 },
            { text: "Bình thản, nợ không gây stress", value: 4 },
            { text: "Coi nợ là đòn bẩy nhưng vẫn rất cẩn trọng", value: 5 },
            { text: "Xem nợ như một công cụ tài chính", value: 6 },
            { text: "Điềm tĩnh, nợ phục vụ chiến lược dài hạn", value: 7 }
        ]
    }
];

let currentStep = 0;
let userAnswers = {}; // Lưu trữ: { questionId: selectedValue }
let financeChart = null; // Biến giữ biểu đồ
let isTestCompleted = false; // Chặn double submit

// DOM Elements
const progressBar = document.getElementById('progress-bar');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const btnNext = document.getElementById('btn-next');
const btnBack = document.getElementById('btn-back');
const quizArea = document.getElementById('quiz-area');
const explanationDiv = document.getElementById('chart-explanation');
const btnQuickTest = document.getElementById('btn-quick-test'); // Nút test nhanh

// Khởi tạo
function init() {
    initChart(); // Vẽ biểu đồ rỗng trước
    renderQuestion(currentStep);
    updateProgress();

    if (btnNext) btnNext.addEventListener('click', handleNext);
    if (btnBack) btnBack.addEventListener('click', handleBack);

    if (btnQuickTest) {
        btnQuickTest.addEventListener('click', handleQuickTest);
    }
}

// Xử lý Test Nhanh (Debug)
function handleQuickTest() {
    // Tự động random đáp án cho tất cả câu hỏi
    questions.forEach((q, index) => {
        const val = Math.floor(Math.random() * 7) + 1; // Random 1-7
        userAnswers[index] = val;
        updateChart(index, val);
    });

    finishTest();
}

// Khởi tạo biểu đồ Radar
function initChart() {
    const ctx = document.getElementById('radarChart').getContext('2d');

    // Tên ngắn gọn cho 12 trục
    const labels = [
        "Tỷ lệ Chi Tiêu", "Quản Lý CT", "Cảm Xúc CT",
        "TN thụ động", "Vị thế TN", "Gia tăng TN",
        "TS/Chi phí", "Cấu trúc TS", "Quản Lý TS",
        "Tỷ lệ NỢ", "Mục đích NỢ", "Cảm xúc NỢ"
    ];

    financeChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Sức khỏe Tài chính',
                data: Array(12).fill(0), // Bắt đầu bằng 0
                backgroundColor: 'rgba(44, 110, 115, 0.2)', // Màu Primary mờ
                borderColor: '#2C6E73', // Màu Primary đậm
                pointBackgroundColor: '#D4A373', // Màu Secondary
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#D4A373',
                borderWidth: 2
            },
            {
                label: 'Trung bình người test khác',
                // Random giá trị từ 3 đến 5 cho 12 khía cạnh
                data: [4.1, 3.9, 5.4, 4.2, 4.2, 5.8, 4.1, 3.7, 3.5, 4.3, 3.6, 5.6],
                backgroundColor: 'rgba(0, 0, 0, 0)', // Trong suốt
                borderColor: '#FF6B6B', // Cam đỏ
                borderWidth: 1.5,
                borderDash: [5, 5], // Nét đứt
                pointRadius: 0, // Không hiện điểm
                pointHoverRadius: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true, // Giữ tỷ lệ để không bị méo
            scales: {
                r: {
                    angleLines: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    },
                    pointLabels: {
                        font: {
                            size: 10,
                            family: "'Be Vietnam Pro', sans-serif"
                        },
                        color: '#2D3748'
                    },
                    suggestedMin: 0,
                    suggestedMax: 7, // Thang điểm 7
                    ticks: {
                        stepSize: 1,
                        display: false // Ẩn số trên trục cho đỡ rối
                    }
                }
            },
            plugins: {
                legend: {
                    display: false // Ẩn chú thích
                }
            }
        }
    });
}

// Cập nhật biểu đồ khi chọn đáp án
function updateChart(index, value) {
    if (financeChart) {
        financeChart.data.datasets[0].data[index] = value;
        financeChart.update();
    }
}


// Highlight trục biểu đồ đang active
function highlightChartLabel(activeIndex) {
    if (!financeChart) return;

    const totalLabels = financeChart.data.labels.length;

    // Tạo mảng màu sắc và font weight
    const labelColors = [];
    const fontWeights = [];
    const fontSizes = [];

    for (let i = 0; i < totalLabels; i++) {
        if (i === activeIndex) {
            labelColors.push('#E63946'); // Màu đỏ nổi bật cho câu hiện tại
            fontWeights.push('bold');
            fontSizes.push(14); // To hơn chút
        } else {
            labelColors.push('#2D3748'); // Màu mặc định
            fontWeights.push('normal');
            fontSizes.push(10);
        }
    }

    // Cập nhật options của chart
    financeChart.options.scales.r.pointLabels.color = labelColors;
    financeChart.options.scales.r.pointLabels.font = {
        size: fontSizes,
        family: "'Be Vietnam Pro', sans-serif",
        weight: fontWeights
    };

    financeChart.update();
}


// Render câu hỏi
function renderQuestion(index) {
    const question = questions[index];

    // Highlight nhãn trên biểu đồ tương ứng với câu hỏi
    highlightChartLabel(index);

    // Animation fade out/in
    const fadeWrapper = document.querySelector('.question-fade-wrapper');
    fadeWrapper.style.animation = 'none';
    fadeWrapper.offsetHeight; /* trigger reflow */
    fadeWrapper.style.animation = null;

    // Cập nhật text hiển thị số câu (phía trên thanh progress)
    const progressText = document.getElementById('progress-step-text');
    if (progressText) {
        progressText.innerText = `Câu ${index + 1}/${questions.length}`;
    }

    // Cập nhật text câu hỏi (Thêm prefix Câu X/12)
    let questionHTML = `<span style="color: var(--color-secondary); font-weight: 700; display: block; font-size: 0.9em; margin-bottom: 8px;">Câu ${index + 1}/${questions.length}</span> ${question.text}`;

    // KHÔNG render giải thích vào đây nữa
    questionText.innerHTML = questionHTML;

    // Cập nhật giải thích vào vùng dưới Chart
    // explanationDiv đã khai báo global ở trên
    if (explanationDiv) {
        if (question.explanation) {
            explanationDiv.style.display = 'block';
            explanationDiv.innerHTML = `<strong>ℹ️ Giải thích:</strong> <br> ${question.explanation}`;
        } else {
            explanationDiv.style.display = 'none';
            explanationDiv.innerHTML = '';
        }
    }

    // Xóa options cũ
    optionsContainer.innerHTML = '';

    // Tạo options mới
    question.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';

        // Thêm "Cấp X" vào trước nội dung option
        btn.innerHTML = `<span><strong style="color: var(--color-primary); margin-right: 8px;">Cấp ${opt.value}:</strong> ${opt.text}</span>`;

        btn.onclick = () => selectOption(index, opt.value, btn);

        // Kiểm tra nếu đã chọn trước đó (khi back lại)
        if (userAnswers[index] === opt.value) {
            btn.classList.add('selected');
            btnNext.disabled = false;
        }

        optionsContainer.appendChild(btn);
    });

    // Cập nhật trạng thái nút Back
    btnBack.style.visibility = index === 0 ? 'hidden' : 'visible';

    // Cập nhật trạng thái nút Test Nhanh (Chỉ hiện ở câu 1)
    if (btnQuickTest) {
        btnQuickTest.style.display = index === 0 ? 'block' : 'none';
    }

    // Reset nút Next nếu chưa chọn cho câu mới
    if (userAnswers[index] === undefined) {
        btnNext.disabled = true;
    }
}

// Xử lý chọn đáp án
function selectOption(questionIndex, value, clickedBtn) {
    // Lưu đáp án
    userAnswers[questionIndex] = value;

    // Cập nhật lên biểu đồ ngay lập tức
    updateChart(questionIndex, value);

    // Highlight UI
    const allBtns = optionsContainer.querySelectorAll('.option-btn');
    allBtns.forEach(b => b.classList.remove('selected'));
    clickedBtn.classList.add('selected');

    // Mở khóa nút Next
    btnNext.disabled = false;

    // Auto next nhẹ nhàng sau 400ms
    setTimeout(() => handleNext(), 400);
}

// Xử lý nút Next
function handleNext() {
    if (currentStep < questions.length - 1) {
        currentStep++;
        renderQuestion(currentStep);
        updateProgress();
    } else {
        finishTest();
    }
}

// Xử lý nút Back
function handleBack() {
    if (currentStep > 0) {
        currentStep--;
        renderQuestion(currentStep);
        updateProgress();
    }
}

// Cập nhật thanh tiến độ
function updateProgress() {
    // Mỗi câu chiếm 1 phần
    const percent = ((currentStep) / questions.length) * 100;
    progressBar.style.width = `${percent}%`;
}

// Kết thúc bài test
function finishTest() {
    if (isTestCompleted) return; // Chặn gọi nhiều lần
    isTestCompleted = true;

    // Tính điểm tổng
    let totalScore = 0;
    Object.values(userAnswers).forEach(val => totalScore += val);

    // Max score = 12 câu * 7 điểm = 84
    const maxScore = questions.length * 7;
    const scorePercent = Math.round((totalScore / maxScore) * 100);

    // Chuẩn bị dữ liệu chi tiết để vẽ chart bên result
    // userAnswers là object {0: val, 1: val...}, cần chuyển thành mảng theo thứ tự câu hỏi
    // userAnswers là object {0: val, 1: val...}, cần chuyển thành mảng theo thứ tự câu hỏi
    const details = [];
    questions.forEach((q, index) => {
        details.push(userAnswers[index] || 0);
    });

    // --- NEW: Lưu data đầy đủ (Câu hỏi + Đáp án text) vào localStorage để dùng cho AI Prompt ---
    const fullResultData = questions.map((q, index) => {
        const selectedVal = userAnswers[index];
        const selectedOption = q.options.find(opt => opt.value === selectedVal);
        return {
            id: q.id,
            category: index < 3 ? "Chi Phí" : (index < 6 ? "Thu Nhập" : (index < 9 ? "Tài Sản" : "Nợ")), // Map category thủ công dựa vào index
            questionText: q.text,
            selectedValue: selectedVal,
            selectedOptionText: selectedOption ? selectedOption.text : "N/A"
        };
    });
    localStorage.setItem('financeHealth_fullResult', JSON.stringify(fullResultData));
    // -----------------------------------------------------------------------------------------

    // --- LOGIC TÍNH ĐIỂM CHUẨN (Giống Result Page & Server) ---
    const calculateEffectiveScore = (indices) => {
        const mScore = userAnswers[indices[0]] || 0;
        const s1Score = userAnswers[indices[1]] || 0;
        const s2Score = userAnswers[indices[2]] || 0;

        let modifier = 0;
        if (s1Score > mScore) modifier++;
        else if (s1Score < mScore) modifier--;
        if (s2Score > mScore) modifier++;
        else if (s2Score < mScore) modifier--;

        let effectiveScore = mScore;
        if (modifier === 2) effectiveScore += 0.6;
        else if (modifier === 1) effectiveScore += 0.3;
        else if (modifier === -1) effectiveScore -= 0.3;
        else if (modifier === -2) effectiveScore -= 0.6;

        return effectiveScore;
    };

    // 1. Tính 4 điểm hạng mục
    const costES = calculateEffectiveScore([0, 1, 2]);   // Chi phí (MAIN)
    const incomeES = calculateEffectiveScore([3, 4, 5]); // Thu nhập
    const assetES = calculateEffectiveScore([6, 7, 8]);  // Tài sản
    const debtES = calculateEffectiveScore([9, 10, 11]); // Nợ

    // 2. Logic so sánh Điểm phụ vs Điểm chính (Cost)
    const mainScore = costES;
    let plusCount = 0;
    let minusCount = 0;

    const others = [incomeES, assetES, debtES];
    others.forEach(s => {
        if (s > mainScore) plusCount++;
        if (s < mainScore) minusCount++;
    });

    // 3. Tính điểm tổng cuối cùng (Final Score)
    let finalScore = mainScore;

    // Áp dụng quy tắc
    if (plusCount === 3) finalScore += 0.6;
    else if (minusCount === 3) finalScore -= 0.6;
    else if (plusCount === 1 && minusCount === 2) finalScore -= 0.3;
    else if (minusCount === 1 && plusCount === 2) finalScore += 0.3;
    else {
        const net = plusCount - minusCount;
        if (net >= 2) finalScore += 0.3;
        else if (net <= -2) finalScore -= 0.3;
    }

    // Làm tròn 2 số thập phân để gửi đi
    const avgScore = finalScore.toFixed(2); // override biến cũ
    // -----------------------------------------------------------

    // Lưu Score và Level vào LocalStorage để Result page dùng
    localStorage.setItem('financeHealth_score', avgScore);
    localStorage.setItem('financeHealth_level', Math.round(finalScore));
    localStorage.setItem('financeHealth_scorePercent', scorePercent);

    // --- NEW: Lưu thời gian hoàn thành bài test ---
    const testTime = new Date().toISOString();
    localStorage.setItem('financeHealth_testTime', testTime);

    // --- NEW: Tự động lưu kết quả vào Google Sheet (Log Only) ---
    const sendLog = async () => {
        try {
            const chartCanvas = document.getElementById('radarChart');
            // Helper: Get Cookie
            function getCookie(name) {
                const value = `; ${document.cookie}`;
                const parts = value.split(`; ${name}=`);
                if (parts.length === 2) return parts.pop().split(';').shift();
                return "";
            }

            const chartBase64 = chartCanvas ? chartCanvas.toDataURL('image/png') : "";
            const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby8jSZL4aub8dWhnHyzr8AnR9Ar7xE2_EUANqV5ZrT4xW7tXYXUNGnaSNWZaxI6AjMu/exec';

            const payload = {
                logOnly: true,
                testTime: testTime,
                score: avgScore,
                level: Math.round(avgScore),
                details: fullResultData,
                chartImage: "",
                name: "Anonymous User",
                email: "",
                affiliateId: getCookie('affiliate_id') || "",
                affiliateProductId: getCookie('affiliate_product_id') || ""
            };

            console.log("🚀 Sending Auto-log payload:", payload);

            const response = await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                keepalive: true,
                headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                body: JSON.stringify(payload)
            });
            console.log("✅ Auto-log request sent.");

        } catch (e) {
            console.error("❌ Auto-log failed:", e);
        }
    };
    // -------------------------------------------------------------

    // Hiển thị loading giả lập
    quizArea.innerHTML = `
        <div style="text-align: center; padding-top: 40px;">
            <div class="spinner" style="margin-bottom: 20px; font-size: 2rem;">🩺</div>
            <h3 style="color: var(--color-primary);">Đang phân tích dữ liệu...</h3>
            <p class="text-muted">Hệ thống đang tổng hợp hồ sơ sức khỏe của bạn.</p>
        </div>
    `;
    progressBar.style.width = '100%';

    // Gửi log và chuyển trang
    sendLog().then(() => {
        window.location.href = `result.html?score=${scorePercent}&details=${details.join(',')}`;
    });
}

// Chạy ứng dụng
init();
