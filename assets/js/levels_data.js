/**
 * Dữ liệu Chi tiết 7 Cấp độ Tài chính
 * Được sử dụng để hiển thị thông tin chi tiết khi người dùng đạt được hoặc click vào từng cấp độ.
 */

const FINANCIAL_LEVELS_DATA = {
    1: {
        title: "Khủng Hoảng Tài Chính",
        subtitle: "Khi Bạn Đang Ở \"Phòng Cấp Cứu\" Tài Chính",
        color: "#F94144", // Red
        className: "level-1",
        characteristics: [
            "Luôn căng thẳng vì thiếu tiền",
            "Phản ứng bản năng, chữa cháy",
            "Mất kiểm soát dòng tiền",
            "Né tránh đối diện sự thật"
        ],
        content: [
            {
                heading: "1. Chẩn Đoán Tình Trạng",
                body: `<div style="background-color: rgba(249, 65, 68, 0.1); padding: 25px; border-radius: 16px; border: 1px solid rgba(249, 65, 68, 0.3); box-shadow: 0 4px 15px rgba(249, 65, 68, 0.1);">
                    <p style="font-size: 16px; color: #333; margin-bottom: 20px; text-align: justify; line-height: 1.6;">
                        Bạn biết không, khi tôi nhìn vào những con số này, tôi không thấy một "trường hợp thất bại" - tôi thấy một người đang kêu cứu. Cấp độ 1 là lúc:
                    </p>
                    
                    <div style="background: #fff; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border-left: 5px solid #F94144;">
                        <p style="color: #F94144; font-weight: 800; margin-bottom: 15px; text-transform: uppercase; font-size: 14px; letter-spacing: 1px;">
                             🔍 4 Chỉ số nhận diện cấp độ này:
                        </p>
                        <ul style="list-style: none; padding: 0; margin: 0;">
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Chi phí vượt quá 110% thu nhập</strong> - Bạn đang tiêu nhiều hơn những gì kiếm được.</div>
                            </li>
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Thu nhập từ tiết kiệm và đầu tư gần như bằng 0</strong> - Túi tiền trống rỗng vào cuối tháng.</div>
                            </li>
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Tổng nợ phải trả (gốc + lãi) hàng tháng chiếm hơn 50% thu nhập</strong> - Phần lớn tiền kiếm được chỉ để trả nợ.</div>
                            </li>
                            <li style="display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Tài sản có thể gánh vác 0-1 tháng chi phí</strong> - Một cơn gió nhẹ cũng đủ quật ngã.</div>
                            </li>
                        </ul>
                    </div>

                    <p style="margin-top: 25px; font-weight: 600; color: #F94144; text-align: center; font-style: italic; font-size: 15px;">
                        "Đây không phải là lúc để che giấu hay xấu hổ. Đây là lúc cần can thiệp khẩn cấp."
                    </p>
                </div>`
            },
            {
                heading: "2. Những Biểu Hiện Chính ở Cấp Độ này",
                body: `<div style="background-color: rgba(249, 65, 68, 0.1); padding: 25px; border-radius: 16px; border: 1px solid rgba(249, 65, 68, 0.3); box-shadow: 0 4px 15px rgba(249, 65, 68, 0.1);">
                    <p style="font-size: 16px; color: #333; margin-bottom: 20px; text-align: justify; line-height: 1.6;">
                        Có lẽ bạn đang:
                    </p>
                    
                    <div style="background: #fff; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border-left: 5px solid #F94144;">
                        <ul style="list-style: none; padding: 0; margin: 0;">
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;">Thức đêm lo nghĩ về các khoản nợ sắp đến hạn.</div>
                            </li>
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;">Né tránh các cuộc gọi từ ngân hàng hoặc người cho vay.</div>
                            </li>
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;">Vay tiền từ người này để trả nợ người kia - như đang chạy trốn một vòng luẩn quẩn.</div>
                            </li>
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;">Cảm giác tim đập nhanh mỗi khi mở ví hoặc kiểm tra tài khoản.</div>
                            </li>
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;">Cãi nhau với người thân về tiền bạc ngày càng nhiều.</div>
                            </li>
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;">Phải cầm cố, bán đồ để qua ngày.</div>
                            </li>
                            <li style="display: flex; align-items: flex-start;">
                                <div style="color: #444;">Cảm thấy tuyệt vọng, xấu hổ, hoặc muốn bỏ cuộc.</div>
                            </li>
                        </ul>
                    </div>

                    <p style="margin-top: 25px; font-weight: 600; color: #F94144; text-align: center; font-style: italic; font-size: 15px;">
                        "Tôi hiểu cảm giác đó. Nó giống như đang chìm dần và không biết bám vào đâu."
                    </p>
                </div>`
            },
            {
                heading: "3. Tại Sao Bạn Rơi Vào Đây? (Không Phải Vì Bạn Tệ)",
                body: `<p>Để tôi nói thẳng với bạn - đây không phải lỗi của bạn theo cách bạn nghĩ.</p>
                <p><strong>Về mặt tâm lý học:</strong></p>
                <ul>
                    <li><strong>Hiệu ứng đà (Momentum Effect):</strong> Khi tài chính xuống dốc, não bộ rơi vào trạng thái "học được sự bất lực" - bạn tin rằng mình không thể thay đổi được gì</li>
                    <li><strong>Tư duy khan hiếm (Scarcity Mindset):</strong> Khi thiếu tiền, IQ của bạn tạm thời giảm 13-14 điểm - khiến việc ra quyết định sáng suốt trở nên khó khăn hơn</li>
                    <li><strong>Trốn tránh cảm xúc (Emotional Avoidance):</strong> Não bộ né tránh đau khổ bằng cách... không nhìn vào vấn đề. Bạn không mở app ngân hàng không phải vì lười, mà vì não đang tự bảo vệ</li>
                </ul>
                <p><strong>Về mặt thực tế:</strong></p>
                <ul>
                    <li>Thu nhập không đủ để trang trải nhu cầu cơ bản</li>
                    <li>Thiếu giáo dục tài chính từ nhỏ (không ai dạy chúng ta điều này ở trường)</li>
                    <li>Những cú sốc bất ngờ: ốm đau, mất việc, tai nạn</li>
                    <li>Văn hóa tiêu dùng "sống ảo" và áp lực xã hội</li>
                </ul>
                <p>Tất cả chỉ là một chuỗi hoàn cảnh chồng chất lên nhau. Nhưng tin tốt là: bạn có thể thoát ra.</p>`
            },
            {
                heading: "4. Hành Động Cấp Cứu - Làm Ngay Bây Giờ",
                body: `<p>Hãy tưởng tượng bạn đang băng bó vết thương. Ưu tiên số 1: cầm máu trước.</p>
                <p><strong>Bước 1: Dừng chảy máu</strong></p>
                <ul>
                    <li>Dừng mọi chi tiêu không thiết yếu - Tôi biết, nghe khắc nghiệt. Nhưng giống như khi bị thương, bạn cần ngừng làm tổn thương thêm</li>
                    <li>Hủy các dịch vụ đăng ký không dùng (Netflix, Spotify, membership...)</li>
                    <li>Nói "không" tạm thời với gặp gỡ bạn bè tốn tiền</li>
                </ul>
                <p><strong>Bước 2: Tạo không gian thở</strong></p>
                <ul>
                    <li>Thành thật với chủ nợ: Gọi điện, giải thích tình hình, xin lùi hạn hoặc giảm lãi suất. Họ muốn thu hồi tiền hơn là kiện bạn</li>
                    <li>Tìm nguồn thu bổ sung gấp: Shipper, bán đồ cũ, làm thêm giờ - bất cứ thứ gì hợp pháp</li>
                </ul>
                <p><strong>Bước 3: Viết ra sự thật</strong></p>
                <ul>
                    <li>Lấy giấy bút, viết ra TOÀN BỘ khoản nợ, thu nhập, chi tiêu</li>
                    <li>Đối mặt với con số - đau một lần còn hơn đau dài</li>
                </ul>`
            },
            {
                heading: "5. Nếu Bạn Không Thay Đổi...",
                body: `<div style="background-color: rgba(249, 65, 68, 0.1); padding: 25px; border-radius: 16px; border: 1px solid rgba(249, 65, 68, 0.3); box-shadow: 0 4px 15px rgba(249, 65, 68, 0.1);">
                    <p style="font-size: 16px; color: #333; margin-bottom: 20px; text-align: justify; line-height: 1.6;">
                        Tôi không muốn dọa bạn, nhưng với vai trò một "bác sĩ tài chính", tôi phải nói thẳng:
                    </p>
                    
                    <div style="background: #fff; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border-left: 5px solid #F94144; margin-bottom: 20px;">
                         <p style="color: #F94144; font-weight: 800; margin-bottom: 15px; text-transform: uppercase; font-size: 14px; letter-spacing: 1px;">
                             ⚠️ Rủi ro nếu không hành động:
                        </p>
                        <ul style="list-style: none; padding: 0; margin: 0;">
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Về sức khỏe:</strong> Stress tài chính kéo dài làm tăng nguy cơ đau tim, đột quỵ, trầm cảm, mất ngủ mãn tính.</div>
                            </li>
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Về quan hệ:</strong> 70% các cuộc ly hôn có nguyên nhân từ tiền bạc.</div>
                            </li>
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Về cơ hội:</strong> Nợ nần kéo dài sẽ khóa mọi cơ hội phát triển - bạn không vay được vốn, không mua nhà, thậm chí khó xin việc.</div>
                            </li>
                            <li style="display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Về tinh thần:</strong> Cảm giác tuyệt vọng có thể dẫn đến những quyết định không thể cứu vãn.</div>
                            </li>
                        </ul>
                    </div>
                     <p style="margin-top: 25px; font-weight: 600; color: #F94144; text-align: center; font-style: italic; font-size: 15px;">
                        "Nhưng nghe này - ĐIỀU ĐÓ SẼ KHÔNG XẢY RA. Vì bạn đang đọc bài này. Bạn đang tìm cách. Đó là dấu hiệu của sự khởi đầu."
                    </p>
                </div>`
            },
            {
                heading: "6. Ưu Tiên 30 Ngày Đầu Tiên - Kế Hoạch Sinh Tồn",
                body: `<p><strong>Tuần 1-2: Tạo ra khoảng trống tài chính</strong></p>
                <ul>
                    <li>Liệt kê tất cả khoản nợ, sắp xếp theo mức lãi suất</li>
                    <li>Đàm phán với 2-3 chủ nợ có số tiền nhỏ nhất (tạo "chiến thắng nhỏ" giúp não tiết dopamine)</li>
                    <li>Cắt giảm 3-5 khoản chi tiêu lớn nhất không cần thiết</li>
                </ul>
                <p><strong>Tuần 3: Tăng dòng tiền vào</strong></p>
                <ul>
                    <li>Tìm 1-2 nguồn thu nhập phụ có thể bắt đầu ngay</li>
                    <li>Bán 5-10 món đồ không dùng trong nhà</li>
                    <li>Mục tiêu: Kiếm thêm ít nhất 20-30% thu nhập hiện tại</li>
                </ul>
                <p><strong>Tuần 4: Xây lối thoát</strong></p>
                <ul>
                    <li>Dành 100% số tiền thêm để trả nợ lãi suất cao nhất</li>
                    <li>Mở tài khoản riêng cho "quỹ khẩn cấp" - mục tiêu: 500k-1 triệu đầu tiên</li>
                    <li>Tìm 1 người bạn/người thân để "accountability partner" - người cùng theo dõi tiến độ</li>
                </ul>
                <p><em>Điều quan trọng nhất: Chỉ tập trung vào 1 ngày tại một thời điểm. Hôm nay bạn chi ít hơn hôm qua 10k cũng là thắng lợi.</em></p>`
            },
            {
                heading: "7. Thông Điệp Từ Bác Sĩ Tài Chính",
                body: `<p>Này bạn,</p>
                <p>Nếu bạn đang đọc đến đây, tôi muốn bạn biết một điều: Khủng hoảng tài chính không định nghĩa bạn là ai.</p>
                <p>Bạn không phải là "người thất bại". Bạn không phải là "kẻ vô dụng". Bạn chỉ đang ở một giai đoạn khó khăn - và giống như mọi giai đoạn, nó sẽ qua.</p>
                <p>Tôi đã gặp hàng trăm người từ cấp độ 1 leo lên cấp độ 4, 5, 6. Họ không phải siêu nhân. Họ chỉ bắt đầu với một bước nhỏ hôm nay.</p>
                <p><strong>Hãy nhớ:</strong></p>
                <ul>
                    <li>Sự xấu hổ là kẻ thù lớn nhất - nó khiến bạn im lặng và cô lập</li>
                    <li>Hành động nhỏ > Kế hoạch hoàn hảo - làm một việc nhỏ hôm nay hơn là lên kế hoạch hoàn hảo rồi không làm gì</li>
                    <li>Bạn xứng đáng được giúp đỡ - đừng ngại mở miệng xin hỗ trợ</li>
                </ul>
                <p>30 ngày sau, khi bạn nhìn lại, bạn sẽ tự hào về bản thân đã dám đối mặt. Và đó sẽ là ngày đầu tiên của một cuộc đời tài chính mới.</p>
                <p>Tôi tin vào bạn. Giờ đến lượt bạn tin vào chính mình.</p>
                <hr style="margin: 24px 0; border-top: 1px dashed var(--color-border);">
                <div style="background-color: var(--color-primary-light); padding: 16px; border-radius: 8px; font-style: italic; text-align: center;">
                    "Hành trình ngàn dặm bắt đầu từ một bước chân. Và bước chân hôm nay của bạn là bước đầu tiên thoát khỏi khủng hoảng."
                    <br><strong>💚 Bác sĩ Tài chính</strong>
                </div>`
            }
        ]
    },
    2: {
        title: "Sinh Tồn Tài Chính",
        subtitle: "Khi Bạn Đã Thoát Cấp Cứu Nhưng Vẫn Chưa Ổn",
        color: "#F9844A", // Orange
        className: "level-2",
        characteristics: [
            "Thắt chặt nhưng mệt mỏi",
            "Sống theo kỳ lương",
            "Không dám nghĩ dài hạn",
            "Thu nhập phụ thuộc 1 nguồn"
        ],
        content: [
            {
                heading: "1. Chẩn Đoán Tình Trạng",
                body: `<div style="background-color: rgba(249, 132, 74, 0.1); padding: 25px; border-radius: 16px; border: 1px solid rgba(249, 132, 74, 0.3); box-shadow: 0 4px 15px rgba(249, 132, 74, 0.1);">
                    <p style="font-size: 16px; color: #333; margin-bottom: 20px; text-align: justify; line-height: 1.6;">
                        Nếu cấp độ 1 là phòng cấp cứu, thì cấp độ 2 là bạn đã được chuyển lên phòng hồi sức - tình trạng ổn định hơn, nhưng vẫn cần theo dõi sát sao.
                    </p>
                    
                    <div style="background: #fff; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border-left: 5px solid #F9844A;">
                        <p style="color: #F9844A; font-weight: 800; margin-bottom: 15px; text-transform: uppercase; font-size: 14px; letter-spacing: 1px;">
                             🔍 4 Chỉ số nhận diện cấp độ này:
                        </p>
                        <ul style="list-style: none; padding: 0; margin: 0;">
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Chi phí ở mức 90-110% thu nhập</strong> - Bạn gần như cân bằng, nhưng vẫn "sống lương về lương".</div>
                            </li>
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Thu nhập từ tiết kiệm và đầu tư chỉ có thể chi trả cho 0-10% CHI PHÍ THIẾT YẾU</strong> - Bắt đầu có dự phòng, nhưng chỉ đủ cho những nhu cầu cơ bản nhất.</div>
                            </li>
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Tổng nợ phải trả (gốc + lãi) hàng tháng chiếm 30-50% thu nhập</strong> - Vẫn còn gánh nặng nợ đáng kể.</div>
                            </li>
                            <li style="display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Tài sản có thể gánh vác 1-6 tháng chi phí</strong> - Đã có chút "đệm" để thở, nhưng một cú sốc lớn vẫn có thể đánh gục.</div>
                            </li>
                        </ul>
                    </div>

                    <p style="margin-top: 25px; font-weight: 600; color: #F9844A; text-align: center; font-style: italic; font-size: 15px;">
                        "Bạn đã làm được rất tốt khi thoát khỏi cấp độ 1. Nhưng đừng để sự thoải mái tạm thời này làm bạn quên rằng mình vẫn đang ở vùng nguy hiểm."
                    </p>
                </div>`
            },
            {
                heading: "2. Những Biểu Hiện Chính ở Cấp Độ này",
                body: `<div style="background-color: rgba(249, 132, 74, 0.1); padding: 25px; border-radius: 16px; border: 1px solid rgba(249, 132, 74, 0.3); box-shadow: 0 4px 15px rgba(249, 132, 74, 0.1);">
                    <p style="font-size: 16px; color: #333; margin-bottom: 20px; text-align: justify; line-height: 1.6;">
                        Cuộc sống của bạn bây giờ có lẽ như thế này:
                    </p>
                    
                    <div style="background: #fff; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border-left: 5px solid #F9844A;">
                        <ul style="list-style: none; padding: 0; margin: 0;">
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Đếm ngày đến lương</strong> - Vẫn còn căng thẳng về tiền, nhưng không còn tuyệt vọng như trước.</div>
                            </li>
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Có tiết kiệm, nhưng thường phải "đập heo" giữa tháng</strong> - Tiền dành dụm cho mục đích này lại phải dùng cho việc khác.</div>
                            </li>
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Lo lắng mỗi khi có chi phí bất ngờ</strong> - Một chiếc xe hỏng, một lần đau ốm, hay một đám cưới bạn bè cũng làm bạn đau đầu.</div>
                            </li>
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Vẫn trả nợ đều đặn, nhưng chủ yếu là gốc + lãi tối thiểu</strong> - Cảm giác như mãi không thấy khoản nợ giảm xuống.</div>
                            </li>
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Bắt đầu dám mơ mộng nhưng chưa dám hành động</strong> - "Giá mà mình có tiền để...", "Ước gì năm sau mình có thể...".</div>
                            </li>
                            <li style="display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Vẫn từ chối nhiều lời mời vì tiền</strong> - Nhưng lần này với tâm trạng lạc quan hơn chứ không còn xấu hổ như trước.</div>
                            </li>
                        </ul>
                    </div>

                    <p style="margin-top: 25px; font-weight: 600; color: #F9844A; text-align: center; font-style: italic; font-size: 15px;">
                        "Bạn đang ở trạng thái 'sống sót' - không chết, nhưng chưa thực sự sống."
                    </p>
                </div>`
            },
            {
                heading: "3. Tại Sao Bạn Đang Ở Đây?",
                body: `<p>Nhiều người nghĩ cấp độ 2 chỉ là trạm dừng chân, nhưng thực tế, 30% người Việt Nam mắc kẹt ở đây cả đời. Tại sao?</p>
                <p><strong>Về mặt tâm lý học:</strong></p>
                <ul>
                    <li><strong>Hiệu ứng Plateau (Cao nguyên):</strong> Sau khi thoát khỏi khủng hoảng, não bộ tiết ra cảm giác "đủ rồi" - bạn cảm thấy tương đối ổn nên mất động lực tiến thêm</li>
                    <li><strong>Paradox of Progress (Nghịch lý của tiến bộ):</strong> Khi bắt đầu có chút tiền dư, bạn dễ "thưởng" cho bản thân - một bữa ăn ngon, một món đồ hay - và vô tình trở lại vạch xuất phát</li>
                    <li><strong>Comfort Zone Trap (Bẫy vùng an toàn):</strong> Não bộ không thích thay đổi. Ở cấp độ 2, cuộc sống đủ ổn để não không còn cảm thấy "nguy hiểm" cần phải hành động gấp</li>
                    <li><strong>Lack of Financial Identity (Thiếu bản sắc tài chính):</strong> Bạn chưa thấy mình là "người giỏi về tiền", nên các quyết định vẫn mang tính ngắn hạn</li>
                </ul>
                <p><strong>Về mặt thực tế:</strong></p>
                <ul>
                    <li>Thu nhập tăng đi kèm với chi tiêu tăng - Lên lương 2 triệu, nhưng chi tiêu tăng 2.5 triệu (hiệu ứng lifestyle creep)</li>
                    <li>Thiếu kỹ năng quản lý tiền cụ thể - Biết phải tiết kiệm, nhưng không biết tiết kiệm bao nhiêu, để đâu, làm thế nào</li>
                    <li>Áp lực xã hội - Bạn bè đi du lịch, mua iPhone, lên đồ xịn... bạn cảm thấy "tụt hậu"</li>
                    <li>Chưa có hệ thống tự động - Mọi thứ đều dựa vào ý chí, nên dễ lung lay</li>
                </ul>`
            },
            {
                heading: "4. Hành Động Chiến Lược - Từ Sinh Tồn Đến Tăng Trưởng",
                body: `<p>Ở cấp độ này, bạn không cần "cấp cứu" nữa. Bạn cần xây hệ thống.</p>
                <p><strong>Chiến lược 1: Tự động hóa tài chính (Set & Forget)</strong></p>
                <ul>
                    <li>Thiết lập chuyển tiền tự động ngay ngày lương về:
                        <ul>
                            <li>10-15% vào tài khoản tiết kiệm (tài khoản khác ngân hàng khác, không có thẻ rút)</li>
                            <li>5-10% vào quỹ đầu tư dài hạn (CHI PHÍ THIẾT YẾU hoặc quỹ mở)</li>
                            <li>Phần còn lại mới là tiền "được tiêu"</li>
                        </ul>
                    </li>
                </ul>
                <p>Tại sao điều này quan trọng? Vì bạn loại bỏ yếu tố "quyết định" - não bộ không còn cơ hội để tìm lý do trì hoãn.</p>
                <p><strong>Chiến lược 2: Đánh sập "khoản nợ đầu tiên"</strong></p>
                <ul>
                    <li>Áp dụng phương pháp Snowball (hiệu quả về mặt tâm lý):
                        <ul>
                            <li>Liệt kê tất cả khoản nợ từ nhỏ đến lớn</li>
                            <li>Tập trung 100% tiền dư vào khoản nợ nhỏ nhất</li>
                            <li>Khi trả xong, dồn toàn bộ số tiền đó sang khoản nợ tiếp theo</li>
                        </ul>
                    </li>
                    <li>Hoặc áp dụng phương pháp Avalanche (hiệu quả về mặt toán học):
                        <ul>
                            <li>Ưu tiên khoản nợ lãi suất cao nhất trước</li>
                            <li>Tiết kiệm được nhiều tiền lãi hơn trong dài hạn</li>
                        </ul>
                    </li>
                </ul>
                <p>Mục tiêu: Trong 3-6 tháng, xóa sổ được ít nhất 1-2 khoản nợ.</p>
                <p><strong>Chiến lược 3: Xây "Quỹ Khẩn Cấp" thực sự</strong></p>
                <ul>
                    <li>Mục tiêu tối thiểu: 3 tháng chi phí sinh hoạt cơ bản</li>
                    <li>Để ở đâu: Tài khoản tiết kiệm lãi suất cao, dễ rút, nhưng không quá dễ</li>
                    <li>Quy tắc vàng: Chỉ động vào khi THỰC SỰ khẩn cấp (mất việc, ốm đau, tai nạn) - không phải vì muốn mua đồ</li>
                </ul>
                <p><strong>Chiến lược 4: Tăng thu nhập bằng mọi cách</strong></p>
                <p>Ở cấp độ 1, bạn cần tiền gấp nên làm bất cứ việc gì. Ở cấp độ 2, bạn cần tăng thu nhập bền vững:</p>
                <ul>
                    <li>Đầu tư vào kỹ năng: Học thêm 1 kỹ năng giúp tăng lương 20-30% trong 1 năm</li>
                    <li>Tạo nguồn thu phụ nhỏ nhưng ổn định: Dạy kèm, freelance, bán hàng online - nhưng chọn cái bạn làm lâu dài được</li>
                    <li>Đàm phán lương: Chuẩn bị portfolio, achievement, xin tăng lương hoặc chuyển việc</li>
                </ul>`
            },
            {
                heading: "5. Nếu Bạn Không Thay Đổi...",
                body: `<div style="background-color: rgba(249, 132, 74, 0.1); padding: 25px; border-radius: 16px; border: 1px solid rgba(249, 132, 74, 0.3); box-shadow: 0 4px 15px rgba(249, 132, 74, 0.1);">
                    <p style="font-size: 16px; color: #333; margin-bottom: 20px; text-align: justify; line-height: 1.6;">
                          Nghe này, cấp độ 2 không tệ. Nhưng nếu bạn mắc kẹt ở đây 5, 10, 20 năm:
                    </p>
                    
                    <div style="background: #fff; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border-left: 5px solid #F94144; margin-bottom: 20px;">
                        <p style="color: #F94144; font-weight: 800; margin-bottom: 15px; text-transform: uppercase; font-size: 14px; letter-spacing: 1px;">
                             ⚠️ Rủi ro trì trệ:
                        </p>
                        <ul style="list-style: none; padding: 0; margin: 0;">
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Về tài chính:</strong> Bạn sẽ luôn sống trong lo lắng. Về hưu mà không có tiền. Con cái lớn lên mà không thể hỗ trợ học hành đầy đủ.</div>
                            </li>
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Về cơ hội:</strong> Mọi cơ hội lớn (mua nhà, khởi nghiệp, đầu tư tốt) đều trôi qua vì bạn "chưa đủ tiền".</div>
                            </li>
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Về tâm lý:</strong> Cảm giác "sống qua ngày" mãi mãi - không bao giờ thực sự thư giãn, không bao giờ thực sự tự do.</div>
                            </li>
                            <li style="display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Về sức khỏe:</strong> Stress mãn tính cấp độ thấp - giống như nước luộc ếch, bạn không nhận ra cho đến khi quá muộn.</div>
                            </li>
                        </ul>
                    </div>

                    <div style="background: #fff; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border-left: 5px solid #F9844A;">
                        <p style="color: #F9844A; font-weight: 800; margin-bottom: 15px; text-transform: uppercase; font-size: 14px; letter-spacing: 1px;">
                             🚀 Tin tốt cho bạn:
                        </p>
                         <p style="font-size: 14px; color: #444; margin: 0;">
                            Chỉ cần 6-24 tháng kỷ luật, bạn có thể lên cấp độ 3. Và ở đó, cuộc chơi sẽ hoàn toàn khác.
                        </p>
                    </div>
                </div>`
            },
            {
                heading: "6. Ưu Tiên 30 Ngày - Kế Hoạch Xây Nền Móng",
                body: `<p><strong>Tuần 1: Xây hệ thống tự động</strong></p>
                <ul>
                    <li>Mở 2 tài khoản mới: 1 cho tiết kiệm, 1 cho đầu tư/trả nợ</li>
                    <li>Thiết lập chuyển tiền tự động ngay ngày 1-2 sau khi lương về</li>
                    <li>Tính toán chính xác chi phí cố định hàng tháng (nhà, điện, nước, ăn uống, đi lại)</li>
                </ul>
                <p><strong>Tuần 2: Lập bản đồ nợ & chiến lược tấn công</strong></p>
                <ul>
                    <li>Viết ra tất cả khoản nợ: số tiền, lãi suất, kỳ hạn</li>
                    <li>Quyết định dùng phương pháp Snowball hay Avalanche</li>
                    <li>Tính toán: nếu bỏ thêm X tiền mỗi tháng, bao lâu sẽ trả xong khoản nợ đầu tiên?</li>
                </ul>
                <p><strong>Tuần 3: Tăng thu nhập</strong></p>
                <ul>
                    <li>Xác định 1 kỹ năng có thể học trong 3-6 tháng để tăng thu nhập</li>
                    <li>Đăng ký 1 khóa học (miễn phí hoặc rẻ) hoặc tìm mentor</li>
                    <li>Hoặc: Bắt đầu 1 side hustle nhỏ (mục tiêu: 2-5 triệu/tháng)</li>
                </ul>
                <p><strong>Tuần 4: Xây thói quen tracking (theo dõi)</strong></p>
                <ul>
                    <li>Tải app quản lý chi tiêu (Misa, Money Lover, hoặc Excel đơn giản)</li>
                    <li>Ghi chép TỪNG ĐỒNG bạn tiêu trong 1 tuần - không phán xét, chỉ ghi</li>
                    <li>Cuối tuần, xem lại và tìm 3 khoản chi tiêu có thể giảm 30-50%</li>
                </ul>
                <p><strong>Mục tiêu cột mốc 30 ngày:</strong></p>
                <ul>
                    <li>✅ Có hệ thống tự động tiết kiệm ít nhất 10% lương</li>
                    <li>✅ Trả thêm được 1 tháng nợ cho khoản nợ ưu tiên</li>
                    <li>✅ Quỹ khẩn cấp tăng thêm 1-2 triệu</li>
                    <li>✅ Có kế hoạch cụ thể tăng thu nhập 6 tháng tới</li>
                </ul>`
            },
            {
                heading: "7. Thông Điệp Từ Bác Sĩ Tài Chính",
                body: `<p>Này bạn,</p>
                <p>Nếu bạn đang ở cấp độ 2, tôi muốn nói: Hãy tự hào về bản thân.</p>
                <p>Bạn đã thoát khỏi cấp cứu. Bạn đã sống sót qua cơn bão. Nhiều người không làm được điều đó.</p>
                <p>Nhưng đừng dừng lại ở đây.</p>
                <p>Cấp độ 2 giống như bạn đang đạp xe lên dốc - nếu dừng lại, bạn sẽ trượt xuống. Nhưng nếu bạn cố gắng thêm một chút, bạn sẽ tới đỉnh, và từ đó... là đường xuống thoải mái.</p>
                <p>Sự khác biệt giữa người mãi mãi ở cấp độ 2 và người lên cấp độ 3-4? Không phải thu nhập. Không phải may mắn.</p>
                <p>Đó là hệ thống và kiên nhẫn.</p>
                <p>Bạn không cần phải hoàn hảo. Bạn chỉ cần:</p>
                <ul>
                    <li>Tự động hóa việc tiết kiệm</li>
                    <li>Kiên định trả nợ theo kế hoạch</li>
                    <li>Tăng thu nhập từ từ nhưng bền vững</li>
                    <li>Tin vào quá trình, dù chậm</li>
                </ul>
                <p>12 tháng sau, khi bạn nhìn lại, bạn sẽ ngạc nhiên về con người mình đã trở thành.</p>
                <p>Tôi đã thấy quá nhiều người làm được. Và tôi biết bạn cũng có thể.</p>
                <p>Cấp độ 3 đang chờ bạn. Giờ là lúc bước tiếp.</p>
                <hr style="margin: 24px 0; border-top: 1px dashed var(--color-border);">
                <div style="background-color: var(--color-primary-light); padding: 16px; border-radius: 8px; font-style: italic; text-align: center;">
                    "Bạn không cần phải thấy cả cầu thang. Chỉ cần thấy bậc đầu tiên, rồi bước lên."
                    <br><strong>💚 Bác sĩ Tài chính</strong>
                </div>`
            }
        ]
    },
    3: {
        title: "An Toàn Tài Chính",
        subtitle: "Khi Bạn Bắt Đầu Thở Phào Nhẹ Nhõm",
        color: "#F9C74F", // Yellow
        className: "level-3",
        characteristics: [
            "Bắt đầu có cảm giác yên tâm",
            "Biết kế hoạch hóa chi tiêu",
            "Có quỹ dự phòng cơ bản",
            "Ý thức tiết kiệm rõ ràng"
        ],
        content: [
            {
                heading: "1. Chẩn Đoán Tình Trạng",
                body: `<div style="background-color: rgba(249, 199, 79, 0.1); padding: 25px; border-radius: 16px; border: 1px solid rgba(249, 199, 79, 0.3); box-shadow: 0 4px 15px rgba(249, 199, 79, 0.1);">
                    <p style="font-size: 16px; color: #333; margin-bottom: 20px; text-align: justify; line-height: 1.6;">
                        Chào mừng bạn đến với mặt đất! Sau khi vật lộn ở cấp độ 1 và 2, cấp độ 3 giống như lần đầu tiên bạn được hít thở không khí trong lành.
                    </p>
                    
                    <div style="background: #fff; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border-left: 5px solid #F9C74F;">
                        <p style="color: #F9C74F; font-weight: 800; margin-bottom: 15px; text-transform: uppercase; font-size: 14px; letter-spacing: 1px;">
                             🔍 4 Chỉ số nhận diện cấp độ này:
                        </p>
                        <ul style="list-style: none; padding: 0; margin: 0;">
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Chi phí chiếm khoảng 70-90% thu nhập</strong> - Bạn luôn dư một khoản mỗi tháng mà không cần quá chắt chiu.</div>
                            </li>
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Thu nhập từ tiết kiệm và đầu tư chi trả được 10-30% CHI PHÍ THIẾT YẾU</strong> - Tiền bắt đầu sinh ra tiền, dù chưa nhiều.</div>
                            </li>
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Tổng nợ phải trả (gốc + lãi) hàng tháng chỉ còn 10-30% thu nhập</strong> - Nợ xấu đã hết, chỉ còn những khoản nợ kiểm soát được.</div>
                            </li>
                            <li style="display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Tài sản dự phòng đủ cho 6-12 tháng chi phí</strong> - Bạn có thể mất việc 1 năm mà không chết đói.</div>
                            </li>
                        </ul>
                    </div>

                    <p style="margin-top: 25px; font-weight: 600; color: #F9C74F; text-align: center; font-style: italic; font-size: 15px;">
                        "Bạn đã ngừng 'chạy ăn từng bữa' và bắt đầu 'xây dựng tương lai'."
                    </p>
                </div>`
            },
            {
                heading: "2. Những Biểu Hiện Chính ở Cấp Độ này",
                body: `<div style="background-color: rgba(249, 199, 79, 0.1); padding: 25px; border-radius: 16px; border: 1px solid rgba(249, 199, 79, 0.3); box-shadow: 0 4px 15px rgba(249, 199, 79, 0.1);">
                    <p style="font-size: 16px; color: #333; margin-bottom: 20px; text-align: justify; line-height: 1.6;">
                        Cuộc sống của bạn bây giờ có những đặc điểm này:
                    </p>
                    
                    <div style="background: #fff; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border-left: 5px solid #F9C74F;">
                        <ul style="list-style: none; padding: 0; margin: 0;">
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Không còn sợ hãi khi mở hóa đơn</strong> - Bạn biết mình có đủ khả năng chi trả.</div>
                            </li>
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Bắt đầu đi du lịch, mua sắm</strong> những món đồ chất lượng hơn mà không cần nhìn giá quá kỹ.</div>
                            </li>
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Ngủ ngon hơn</strong> - Cái cảm giác "bất an thường trực" về tiền đã biến mất.</div>
                            </li>
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Có quỹ dự phòng khẩn cấp đầy đủ</strong> - Xe hỏng? Tủ lạnh hư? Chuyện nhỏ.</div>
                            </li>
                            <li style="display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Bắt đầu nghĩ về đầu tư</strong> - Nhưng có thể chưa biết bắt đầu từ đâu hoặc còn e ngại rủi ro.</div>
                            </li>
                        </ul>
                    </div>

                    <p style="margin-top: 25px; font-weight: 600; color: #F9C74F; text-align: center; font-style: italic; font-size: 15px;">
                        "Bạn đang ở trạng thái 'bình yên'. Đây là nền tảng tuyệt vời, nhưng chưa phải là đích đến."
                    </p>
                </div>`
            },
            {
                heading: "3. Tại Sao Nhiều Người \"An Phận\" Ở Đây?",
                body: `<p>Đây là một cấp độ rất nguy hiểm theo một nghĩa khác - quá thoải mái để thôi thúc thay đổi, nhưng chưa đủ để thực sự tự do.</p>
                <p><strong>Về mặt tâm lý học:</strong></p>
                <ul>
                    <li><strong>The Comfort Paradox (Nghịch lý thoải mái):</strong> Khi cuộc sống đủ tốt, não bộ ngại rủi ro. "Đã ổn rồi, sao phải thay đổi?" - đây là lý do 40% người ở cấp độ 3 mắc kẹt mãi mãi</li>
                    <li><strong>Analysis Paralysis (Tê liệt phân tích):</strong> Có tiền rồi nhưng không biết làm gì - quá nhiều lựa chọn khiến bạn... không chọn gì cả. Chứng khoán? Vàng? Bất động sản? Crypto? Rồi cứ nghĩ mãi không làm</li>
                    <li><strong>Imposter Syndrome về tài chính:</strong> Trong thâm tâm vẫn thấy mình là "người nghèo may mắn có chút tiền" chứ chưa thấy mình là "người giàu đang xây dựng tài sản"</li>
                    <li><strong>Fear of Loss > Joy of Gain:</strong> Theo tâm lý học hành vi, nỗi đau mất tiền gấp 2.5 lần niềm vui kiếm được tiền - nên bạn thà giữ tiền trong ngân hàng lãi 4%/năm còn hơn đầu tư có thể lãi 12% nhưng rủi ro</li>
                </ul>
                <p><strong>Về mặt thực tế:</strong></p>
                <ul>
                    <li>Thiếu kiến thức đầu tư: Biết phải đầu tư, nhưng không biết bắt đầu từ đâu, tin ai</li>
                    <li>Văn hóa "giữ tiền cho chắc": Ông bà dạy "của để dành cho ngày mưa", ít ai dạy "đầu tư để tiền sinh tiền"</li>
                    <li>Sợ lừa đảo: Nghe quá nhiều câu chuyện về đầu tư thua lỗ, đa cấp, sàn ảo - nên thà không làm gì</li>
                    <li>Chưa có mục tiêu tài chính rõ ràng: Tiết kiệm để làm gì? Về hưu? Mua nhà? Du lịch? Không rõ nên không có động lực</li>
                </ul>`
            },
            {
                heading: "4. Hành Động Đột Phá - Từ An Toàn Đến Tự Tin",
                body: `<p>Ở cấp độ 3, bạn không cần "sửa gì" - bạn cần nâng cấp tư duy và kỹ năng.</p>
                <p><strong>Hành động 1: Từ "Tiết kiệm" sang "Đầu tư có chiến lược"</strong></p>
                <p>Đây là bước chuyển mình quan trọng nhất. Nguyên tắc vàng: 50/30/20 nâng cao</p>
                <ul>
                    <li>50%: Chi phí thiết yếu (nhà, ăn, đi lại, bảo hiểm)</li>
                    <li>20%: Đầu tư dài hạn (chứng khoán, quỹ mở, bất động sản nhỏ)</li>
                    <li>10%: Tiết kiệm ngắn hạn (du lịch, mua sắm lớn, dự phòng)</li>
                    <li>20%: Tự do chi tiêu (giải trí, sở thích, ăn uống)</li>
                </ul>
                <p>Khởi đầu đầu tư thông minh:</p>
                <ul>
                    <li>Bước 1: Dành 3-6 tháng học về 1 kênh đầu tư duy nhất (chứng khoán, quỹ mở, hoặc bất động sản nhỏ)</li>
                    <li>Bước 2: Bắt đầu với số tiền nhỏ (5-10 triệu) - đủ để "đau" nếu mất nhưng không "chết"</li>
                    <li>Bước 3: Học qua thực hành - mất tiền = học phí, kiếm được = động lực</li>
                    <li>Bước 4: Khi đã hiểu rõ 1 kênh, mới mở rộng sang kênh khác</li>
                </ul>
                <p><em>Lời khuyên từ bác sĩ: Đừng đầu tư vào thứ bạn không hiểu. Đừng tin "lời mách nước". Đầu tư tốt nhất là đầu tư bạn có thể giải thích cho người khác.</em></p>
                <p><strong>Hành động 2: Xây "Tài sản sinh lời" đầu tiên</strong></p>
                <p>Đây là lúc chuyển từ "làm việc vì tiền" sang "tiền làm việc cho bạn". 3 loại tài sản sinh lời phù hợp cấp độ 3:</p>
                <ol>
                    <li><strong>Tài sản giấy (Paper Assets):</strong> Quỹ mở index fund, Trái phiếu chính phủ, Cổ phiếu blue-chip</li>
                    <li><strong>Tài sản kỹ năng (Skill Assets):</strong> Đầu tư vào khóa học tăng lương, Xây dựng kênh youtube/blog</li>
                    <li><strong>Tài sản nhỏ (Micro Assets):</strong> Cho thuê phòng trọ, Mua đồ cũ sửa bán, Drop shipping/affiliate</li>
                </ol>
                <p>Mục tiêu: Sau 12 tháng, có ít nhất 1 nguồn thu nhập thụ động 2-5 triệu/tháng.</p>
                <p><strong>Hành động 3: "Kill the Debt Monster" (Giết con quỷ nợ nần)</strong></p>
                <ul>
                    <li>Nợ lãi suất cao (>10%/năm): Ưu tiên trả hết trong 6-12 tháng</li>
                    <li>Nợ lãi suất thấp (<8%/năm): Trả theo kế hoạch, đừng vội - hãy dùng tiền thừa để đầu tư lãi cao hơn</li>
                    <li>Nợ 0%: Đừng trả trước hạn - tận dụng tiền mặt để đầu tư</li>
                </ul>
                <p><strong>Hành động 4: Xây "Hệ sinh thái thu nhập"</strong></p>
                <p>Mô hình 3 dòng thu nhập: Thu nhập chính (60-70%), Thu nhập phụ (20-30%), Thu nhập thụ động (10-15%).</p>`
            },
            {
                heading: "5. Nếu Bạn Không Thay Đổi...",
                body: `<div style="background-color: rgba(249, 199, 79, 0.1); padding: 25px; border-radius: 16px; border: 1px solid rgba(249, 199, 79, 0.3); box-shadow: 0 4px 15px rgba(249, 199, 79, 0.1);">
                    <p style="font-size: 16px; color: #333; margin-bottom: 20px; text-align: justify; line-height: 1.6;">
                          Cấp độ 3 là nơi "chết vì thoải mái". Rất nhiều người dừng lại ở đây cả đời.
                    </p>
                    
                    <div style="background: #fff; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border-left: 5px solid #F94144; margin-bottom: 20px;">
                        <p style="color: #F94144; font-weight: 800; margin-bottom: 15px; text-transform: uppercase; font-size: 14px; letter-spacing: 1px;">
                             ⚠️ Rủi ro nếu dậm chân tại chỗ:
                        </p>
                        <ul style="list-style: none; padding: 0; margin: 0;">
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Về tài chính:</strong> Lạm phát sẽ âm thầm bào mòn tiền tiết kiệm của bạn. Bạn an toàn hôm nay, nhưng 10 năm nữa thì chưa chắc.</div>
                            </li>
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Về cơ hội:</strong> Bạn bỏ lỡ kỳ quan lãi suất kép vì sợ rủi ro đầu tư.</div>
                            </li>
                            <li style="display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Về cuộc sống:</strong> Bạn làm việc để giữ an toàn, thay vì làm việc để vươn tới tự do. Bạn trao đổi thời gian lấy tiền đến già.</div>
                            </li>
                        </ul>
                    </div>

                    <div style="background: #fff; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border-left: 5px solid #F9C74F;">
                        <p style="color: #F9C74F; font-weight: 800; margin-bottom: 15px; text-transform: uppercase; font-size: 14px; letter-spacing: 1px;">
                             🚀 Lời khuyên cho bạn:
                        </p>
                         <p style="font-size: 14px; color: #444; margin: 0;">
                            Hãy biến sự an toàn này thành bệ đỡ để nhảy vọt. Đừng coi nó là ghế sofa để nằm ngủ. Chuyển từ "Người tiết kiệm" sang "Nhà đầu tư".
                        </p>
                    </div>
                </div>`
            },
            {
                heading: "6. Ưu Tiên 30 Ngày - Kế Hoạch Nâng Cấp",
                body: `<p><strong>Tuần 1: Vẽ bản đồ tài chính hiện tại</strong></p>
                <ul>
                    <li>Tính chính xác Net Worth (tài sản ròng) = Tài sản - Nợ</li>
                    <li>Đặt mục tiêu tăng Net Worth 20-30% trong 12 tháng</li>
                </ul>
                <p><strong>Tuần 2: Học về 1 kênh đầu tư</strong></p>
                <ul>
                    <li>Chọn 1 kênh: Quỹ mở, chứng khoán, hoặc bất động sản nhỏ</li>
                    <li>Đọc sách, xem video, tham gia cộng đồng uy tín</li>
                    <li>Mục tiêu: Hiểu cơ bản cách hoạt động, rủi ro, và cách bắt đầu</li>
                </ul>
                <p><strong>Tuần 3: Thử nghiệm với số tiền nhỏ</strong></p>
                <ul>
                    <li>Bỏ ra 5-10 triệu cho kênh đầu tư đã học</li>
                    <li>Mục tiêu: Trải nghiệm, không phải kiếm lời ngay</li>
                </ul>
                <p><strong>Tuần 4: Xây dòng thu nhập phụ</strong></p>
                <ul>
                    <li>Brainstorm 5 ý tưởng side hustle, chọn 1 ý tưởng bắt đầu trong 1 tuần</li>
                    <li>Làm thử nghiệm 1 tuần, kiếm được bất kỳ đồng nào</li>
                </ul>
                <p><strong>Mục tiêu cột mốc 30 ngày:</strong></p>
                <ul>
                    <li>✅ Biết chính xác Net Worth của bản thân</li>
                    <li>✅ Có 5-10 triệu đang "làm việc" trong kênh đầu tư</li>
                    <li>✅ Có kế hoạch cụ thể xây dựng dòng thu nhập phụ</li>
                    <li>✅ Tăng tỷ lệ tiết kiệm/đầu tư lên 20-25% thu nhập</li>
                </ul>`
            },
            {
                heading: "7. Thông Điệp Từ Bác Sĩ Tài Chính",
                body: `<p>Này bạn,</p>
                <p>Nếu bạn đang ở cấp độ 3, tôi muốn nói: Bạn đã vượt qua phần khó nhất. Bạn đã xây được một "lá chắn" vững chắc.</p>
                <p>Nhưng đây cũng là lúc nguy hiểm nhất - nguy hiểm vì quá an toàn. Từ cấp 3 lên cấp 4-5 không khó hơn từ cấp 1 lên cấp 3. Thậm chí còn dễ hơn. Vì bạn đã có vốn, có kỹ năng, có thời gian. Thiếu chỉ là tư duy và hành động.</p>
                <p>Bạn không cần phải "liều lĩnh". Bạn chỉ cần:</p>
                <ul>
                    <li>Cho tiền cơ hội "sinh tiền" thay vì nằm yên trong ngân hàng</li>
                    <li>Đầu tư vào bản thân để tăng giá trị</li>
                    <li>Xây dựng nhiều dòng thu nhập</li>
                    <li>Dám học, dám thử, dám sai</li>
                </ul>
                <p>Một câu hỏi dành cho bạn: "5 năm nữa, bạn muốn nhìn lại và nói 'Mình đã làm được!' hay 'Giá mà lúc đó mình...?'"</p>
                <p>Cấp độ 4 đang chờ bạn - nơi bạn không chỉ "an toàn" mà còn "tự tin". Và từ đó, là cánh cửa tự do.</p>
                <hr style="margin: 24px 0; border-top: 1px dashed var(--color-border);">
                <div style="background-color: var(--color-primary-light); padding: 16px; border-radius: 8px; font-style: italic; text-align: center;">
                    "An toàn là tốt. Nhưng tự do thì tuyệt vời hơn. Và khoảng cách giữa chúng chỉ là 12-24 tháng hành động đúng đắn."
                    <br><strong>💚 Bác sĩ Tài chính</strong>
                </div>`
            }
        ]
    },
    4: {
        title: "Ổn Định Tài Chính",
        subtitle: "Khi Bạn Bắt Đầu Cảm Thấy Tự Tin",
        color: "#90BE6D", // Green
        className: "level-4",
        characteristics: [
            "Dòng tiền đều đặn",
            "Ít stress vì tiền",
            "Chi tiêu có kỷ luật",
            "Tư duy dài hạn hình thành"
        ],
        content: [
            {
                heading: "1. Chẩn Đoán Tình Trạng",
                body: `<div style="background-color: rgba(144, 190, 109, 0.1); padding: 25px; border-radius: 16px; border: 1px solid rgba(144, 190, 109, 0.3); box-shadow: 0 4px 15px rgba(144, 190, 109, 0.1);">
                    <p style="font-size: 16px; color: #333; margin-bottom: 20px; text-align: justify; line-height: 1.6;">
                        Chúc mừng! Bạn đã vào <strong>top 50% dân số</strong> về tài chính. Đây là cấp độ mà nhiều người chỉ mơ ước - nơi bạn không chỉ "sống sót" mà bắt đầu thực sự "sống tốt".
                    </p>
                    
                    <div style="background: #fff; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border-left: 5px solid #90BE6D;">
                        <p style="color: #90BE6D; font-weight: 800; margin-bottom: 15px; text-transform: uppercase; font-size: 14px; letter-spacing: 1px;">
                             🔍 4 Chỉ số nhận diện cấp độ này:
                        </p>
                        <ul style="list-style: none; padding: 0; margin: 0;">
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Chi phí ở mức 60-70% thu nhập</strong> - Bạn sống thoải mái mà vẫn dư dả đáng kể để tái đầu tư.</div>
                            </li>
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Thu nhập từ tiết kiệm và đầu tư chi trả được 20-50% CHI PHÍ THIẾT YẾU</strong> - Tiền đang làm việc cho bạn một cách nghiêm túc.</div>
                            </li>
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Tổng nợ phải trả (gốc + lãi) hàng tháng chiếm 10-20% thu nhập</strong> - Chủ yếu là nợ chiến lược (mua tài sản sinh lời).</div>
                            </li>
                            <li style="display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Tài sản dự phòng đủ cho 1-5 năm chi phí</strong> - Một cú sốc lớn vẫn không làm bạn lung lay.</div>
                            </li>
                        </ul>
                    </div>

                    <p style="margin-top: 25px; font-weight: 600; color: #90BE6D; text-align: center; font-style: italic; font-size: 15px;">
                        "Bạn đã chuyển từ 'chơi phòng thủ' sang 'chơi tấn công'. Đây là lúc cuộc chơi trở nên thú vị."
                    </p>
                </div>`
            },
            {
                heading: "2. Những Biểu Hiện Chính ở Cấp Độ này",
                body: `<div style="background-color: rgba(144, 190, 109, 0.1); padding: 25px; border-radius: 16px; border: 1px solid rgba(144, 190, 109, 0.3); box-shadow: 0 4px 15px rgba(144, 190, 109, 0.1);">
                    <p style="font-size: 16px; color: #333; margin-bottom: 20px; text-align: justify; line-height: 1.6;">
                          Cuộc sống thay đổi rõ rệt:
                    </p>
                    
                    <div style="background: #fff; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border-left: 5px solid #90BE6D;">
                        <ul style="list-style: none; padding: 0; margin: 0;">
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Bắt đầu có "dòng tiền" chảy về tài khoản</strong> - Cổ tức, tiền thuê nhà, lãi kinh doanh online...</div>
                            </li>
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Công việc chính không còn là áp lực sinh tồn</strong> - Bạn làm vì muốn phát triển, không phải vì sợ đói.</div>
                            </li>
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Tự tin hơn trong các quyết định lớn</strong> - Mua nhà, đổi xe, đầu tư cho con cái học trường tốt.</div>
                            </li>
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Bắt đầu quan tâm đến tối ưu thuế và cấu trúc tài sản.</strong></div>
                            </li>
                            <li style="display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Có thể mắc kẹt trong "bẫy thu nhập trung bình cao"</strong> - Kiếm nhiều, tiêu nhiều, nâng cấp lối sống quá nhanh.</div>
                            </li>
                        </ul>
                    </div>

                    <p style="margin-top: 25px; font-weight: 600; color: #90BE6D; text-align: center; font-style: italic; font-size: 15px;">
                        "Bạn đang nếm trải hương vị của tự do, nhưng chưa hoàn toàn sở hữu nó."
                    </p>
                </div>`
            },
            {
                heading: "3. Tại Sao Cấp Độ 4 Là \"Bẫy Vàng\"?",
                body: `<p>Đây là cấp độ mà nhiều người dừng lại và nghĩ rằng mình đã "đủ". Và đó không hẳn là sai - nhưng cũng là lý do họ không bao giờ đạt được tự do thực sự.</p>
                <p><strong>Về mặt tâm lý học:</strong></p>
                <ul>
                    <li><strong>Hedonic Adaptation (Thích nghi khoái lạc):</strong> Khi thu nhập tăng, mức "đủ" của bạn cũng tăng theo. Nhà to hơn, xe đẹp hơn, du lịch sang hơn - rồi lại cảm thấy "còn thiếu"</li>
                    <li><strong>Status Anxiety (Lo âu địa vị):</strong> Ở cấp này, bạn bắt đầu so sánh với người giàu hơn. Bạn bè mua nhà 10 tỷ, bạn mua 5 tỷ - cảm giác "thua"</li>
                    <li><strong>The Optimization Trap (Bẫy tối ưu hóa):</strong> Dành quá nhiều thời gian nghiên cứu, phân tích, so sánh kênh đầu tư - nhưng ít khi hành động táo bạo</li>
                    <li><strong>Fear of Peak (Sợ đỉnh cao):</strong> "Mình đã may mắn lắm rồi, không nên tham nhiều nữa" - tâm lý này khiến bạn bỏ lỡ cơ hội lớn</li>
                </ul>
                <p><strong>Về mặt thực tế:</strong></p>
                <ul>
                    <li>Lifestyle Inflation (Lạm phát lối sống): Thu nhập tăng 50%, chi tiêu cũng tăng 50% - kết quả là tỷ lệ tiết kiệm không đổi</li>
                    <li>Quá dàn trải đầu tư: Chút chứng khoán, chút vàng, chút crypto, chút bất động sản - không tập trung nên không kênh nào thực sự mạnh</li>
                    <li>Thiếu kế hoạch rõ ràng: Mục tiêu mơ hồ kiểu "muốn giàu hơn" thay vì cụ thể "đạt 10 tỷ Net Worth trong 5 năm"</li>
                    <li>Ngại rủi ro quá mức: Có tiền nhưng chỉ dám bỏ vào kênh an toàn lãi thấp</li>
                </ul>`
            },
            {
                heading: "4. Hành Động Tăng Tốc - Từ Ổn Định Đến Thịnh Vượng",
                body: `<p>Ở cấp độ 4, bạn đã biết cách chơi. Giờ là lúc chơi lớn hơn, thông minh hơn, bền vững hơn.</p>
                <p><strong>Chiến lược 1: "Asset Acceleration" (Tăng tốc tài sản)</strong></p>
                <p>Mục tiêu: Tăng Net Worth ít nhất 30-50%/năm. Công thức vàng: Net Worth tăng = (Thu nhập - Chi tiêu) + (Tài sản × Tỷ suất sinh lời)</p>
                <ul>
                    <li>Tăng thu nhập: Đàm phán lương, Scale up side hustle, Tạo sản phẩm digital</li>
                    <li>Giảm chi tiêu không cần thiết: Áp dụng quy tắc "Value-based spending"</li>
                    <li>Tăng tỷ suất sinh lời đầu tư: Chuyển từ tiết kiệm sang đầu tư cân bằng, tập trung 80% tài sản vào 2-3 kênh</li>
                </ul>
                <p><strong>Chiến lược 2: "Portfolio Optimization" (Tối ưu danh mục)</strong></p>
                <p>Mô hình phân bổ 70-20-10:</p>
                <ul>
                    <li>70% Core (Nền tảng): Quỹ chỉ số, Blue-chip, BĐS (Mục tiêu 10-15%/năm)</li>
                    <li>20% Growth (Tăng trưởng): Mid-cap, Startup, Crypto (Mục tiêu 20-40%/năm)</li>
                    <li>10% Speculative (Đầu cơ): Penny stock, Altcoin, Angel investing (Rủi ro cao, lợi nhuận rất cao)</li>
                </ul>
                <p><strong>Chiến lược 3: "Tax Optimization" (Tối ưu thuế)</strong></p>
                <p>Học cách hợp pháp hóa giảm thuế: Bảo hiểm nhân thọ, Thành lập công ty cá nhân, Mua BĐS cho thuê, Đóng BHXH tự nguyện.</p>
                <p><strong>Chiến lược 4: "Build a Real Business" (Xây doanh nghiệp thực sự)</strong></p>
                <p>Scale side hustle, Mua business nhỏ, hoặc Đầu tư vào startup/SME. Mục tiêu: Có ít nhất 1 doanh nghiệp/đầu tư mang về 20-50 triệu/tháng passive income.</p>
                <p><strong>Chiến lược 5: "Personal Brand & Network" (Xây dựng thương hiệu cá nhân)</strong></p>
                <p>Viết blog, làm Youtube, podcast, tham gia speaking, làm mentor. Thương hiệu cá nhân tốt = thu nhập thêm 50-200 triệu/năm.</p>`
            },
            {
                heading: "5. Nếu Bạn Không Thay Đổi...",
                body: `<div style="background-color: rgba(144, 190, 109, 0.1); padding: 25px; border-radius: 16px; border: 1px solid rgba(144, 190, 109, 0.3); box-shadow: 0 4px 15px rgba(144, 190, 109, 0.1);">
                    <p style="font-size: 16px; color: #333; margin-bottom: 20px; text-align: justify; line-height: 1.6;">
                          Cấp độ 4 rất "ngon" để dừng lại. Nhưng 10-20 năm sau:
                    </p>
                    
                    <div style="background: #fff; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border-left: 5px solid #F94144; margin-bottom: 20px;">
                        <p style="color: #F94144; font-weight: 800; margin-bottom: 15px; text-transform: uppercase; font-size: 14px; letter-spacing: 1px;">
                             ⚠️ Rủi ro nếu dậm chân tại chỗ:
                        </p>
                        <ul style="list-style: none; padding: 0; margin: 0;">
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Về tài chính:</strong> Bạn giàu có, nhưng vẫn phải làm việc. Nghỉ hưu sớm = không đủ tiền duy trì lối sống.</div>
                            </li>
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Về thời gian:</strong> Vẫn đánh đổi 8-10 giờ/ngày cho công việc. Không có thời gian cho gia đình, đam mê, sức khỏe.</div>
                            </li>
                            <li style="display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Về cơ hội:</strong> Mọi cơ hội lớn (khởi nghiệp, mua bất động sản tăng giá, đầu tư vào công nghệ mới) đều bỏ lỡ vì "chưa dám liều".</div>
                            </li>
                        </ul>
                    </div>

                    <div style="background: #fff; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border-left: 5px solid #90BE6D;">
                        <p style="color: #90BE6D; font-weight: 800; margin-bottom: 15px; text-transform: uppercase; font-size: 14px; letter-spacing: 1px;">
                             🚀 Lời khuyên cho bạn:
                        </p>
                         <p style="font-size: 14px; color: #444; margin: 0;">
                            Hãy biến sự ổn định này thành bệ phóng. Đừng để nó trở thành "bẫy vàng" giữ chân bạn.
                        </p>
                    </div>
                </div>`
            },
            {
                heading: "6. Ưu Tiên 30 Ngày - Kế Hoạch Bứt Phá",
                body: `<p><strong>Tuần 1: Đánh giá lại toàn bộ tài sản</strong></p>
                <ul>
                    <li>Tính chính xác Net Worth, phân loại tài sản đang "làm việc" và đang "ngủ"</li>
                    <li>Đặt mục tiêu cụ thể: "Tăng Net Worth từ X tỷ lên Y tỷ trong 12 tháng"</li>
                </ul>
                <p><strong>Tuần 2: Tái cấu trúc danh mục đầu tư</strong></p>
                <ul>
                    <li>Áp dụng mô hình 70-20-10, chuyển tiền từ tiết kiệm sang quỹ index/cổ phiếu</li>
                </ul>
                <p><strong>Tuần 3: Tìm/Scale doanh nghiệp</strong></p>
                <ul>
                    <li>Lập kế hoạch scale side hustle hoặc research cơ hội mua business/đầu tư startup</li>
                </ul>
                <p><strong>Tuần 4: Xây personal brand</strong></p>
                <ul>
                    <li>Tạo LinkedIn profile, viết bài chia sẻ, kết nối với người trong ngành</li>
                </ul>
                <p><strong>Mục tiêu cột mốc 30 ngày:</strong></p>
                <ul>
                    <li>✅ Có danh mục đầu tư cân bằng theo mô hình 70-20-10</li>
                    <li>✅ Ít nhất 70% tài sản đang sinh lời >10%/năm</li>
                    <li>✅ Có kế hoạch cụ thể tạo/scale 1 business trong 6-12 tháng</li>
                    <li>✅ Bắt đầu xây dựng personal brand (dù nhỏ)</li>
                </ul>`
            },
            {
                heading: "7. Thông Điệp Từ Bác Sĩ Tài Chính",
                body: `<p>Này bạn,</p>
                <p>Nếu bạn đang ở cấp độ 4, tôi muốn chúc mừng bạn một cách chân thành. Bạn đã vào top 20%. Nhưng tôi cũng muốn thách thức bạn. Cấp độ 4 là bẫy ngọt ngào nhất.</p>
                <p>Câu hỏi tôi muốn hỏi bạn: "Bạn muốn dừng lại ở 'giàu có' hay tiếp tục đến 'tự do'?"</p>
                <ul>
                    <li>Giàu có = có tiền, nhưng vẫn phải làm việc</li>
                    <li>Tự do = có đủ tiền để chọn làm gì, khi nào, với ai</li>
                </ul>
                <p>Khoảng cách giữa "giàu có" và "tự do" không xa như bạn nghĩ. Bạn chỉ thiếu một kế hoạch rõ ràng và sự quyết tâm thực hiện.</p>
                <p>5 năm sau, bạn sẽ già hơn dù sao. Câu hỏi là: Bạn sẽ già hơn và tự do, hay già hơn và vẫn phải làm việc? Quyết định nằm ở những hành động bạn làm từ hôm nay.</p>
                <p>Cấp độ 5 đang chờ - nơi công việc không còn là nghĩa vụ, mà là lựa chọn. Và tôi tin bạn sẽ đến đó.</p>
                <hr style="margin: 24px 0; border-top: 1px dashed var(--color-border);">
                <div style="background-color: var(--color-primary-light); padding: 16px; border-radius: 8px; font-style: italic; text-align: center;">
                    "Khoảng cách giữa 'ổn định' và 'tự do' chỉ là 3-5 năm hành động đúng đắn. Đừng để sự thoải mái hôm nay cướp đi tự do của mai sau."
                    <br><strong>💚 Bác sĩ Tài chính</strong>
                </div>`
            }
        ]
    },
    5: {
        title: "Vững Vàng Tài Chính",
        subtitle: "Khi Bạn Bắt Đầu Nếm Mùi Tự Do",
        color: "#48CAE4", // Blue-Teal
        className: "level-5",
        characteristics: [
            "Chủ động với tiền",
            "Có chiến lược rõ ràng",
            "Không còn phụ thuộc lương",
            "Tư duy tài sản thay cho tiêu dùng"
        ],
        content: [
            {
                heading: "1. Chẩn Đoán Tình Trạng",
                body: `<div style="background-color: rgba(72, 202, 228, 0.1); padding: 25px; border-radius: 16px; border: 1px solid rgba(72, 202, 228, 0.3); box-shadow: 0 4px 15px rgba(72, 202, 228, 0.1);">
                    <p style="font-size: 16px; color: #333; margin-bottom: 20px; text-align: justify; line-height: 1.6;">
                        Chào mừng đến với <strong>top 30% dân số</strong>. Bạn đã đến được nơi mà đa số chỉ dám mơ ước - <em style="color: #264653; font-weight: 600;">nơi tiền không còn là vấn đề sống còn, mà thời gian mới là thứ quý giá nhất.</em>
                    </p>
                    
                    <div style="background: #fff; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border-left: 5px solid #48CAE4;">
                        <p style="color: #48CAE4; font-weight: 800; margin-bottom: 15px; text-transform: uppercase; font-size: 14px; letter-spacing: 1px;">
                             🔍 4 Chỉ số nhận diện cấp độ này:
                        </p>
                        <ul style="list-style: none; padding: 0; margin: 0;">
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Chi phí chỉ chiếm 50-60% thu nhập</strong> - Bạn sống một cuộc sống rất thoải mái nhưng vẫn dư dả đáng kể để tái đầu tư.</div>
                            </li>
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Thu nhập từ Tiết kiệm và Đầu tư chi trả được 50-100% CHI PHÍ THIẾT YẾU</strong> - Hệ thống tiền tệ đang làm việc chăm chỉ thay bạn mỗi ngày.</div>
                            </li>
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Tổng nợ phải trả (gốc + lãi) hàng tháng chỉ còn 0-10% thu nhập</strong> - Bạn đã xóa sổ nợ xấu, chỉ còn giữ lại những khoản "nợ chiến lược" để tối ưu đòn bẩy.</div>
                            </li>
                            <li style="display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Tài sản dự phòng đủ cho 5-10 năm chi phí</strong> - Bạn có thể ngừng làm việc hôm nay và 1 thập kỷ sau mới phải lo lắng.</div>
                            </li>
                        </ul>
                    </div>

                    <p style="margin-top: 25px; font-weight: 600; color: #264653; text-align: center; font-style: italic; font-size: 15px;">
                        "Bạn đã chuyển từ trò chơi 'làm việc vì tiền' sang 'làm việc vì ý nghĩa'. Đây là lúc cuộc chơi cuộc đời hoàn toàn thay đổi."
                    </p>
                </div>`
            },
            {
                heading: "2. Những Biểu Hiện Chính ở Cấp Độ này",
                body: `<div style="background-color: rgba(72, 202, 228, 0.1); padding: 25px; border-radius: 16px; border: 1px solid rgba(72, 202, 228, 0.3); box-shadow: 0 4px 15px rgba(72, 202, 228, 0.1);">
                    <p style="font-size: 16px; color: #333; margin-bottom: 20px; text-align: justify; line-height: 1.6;">
                        Cuộc sống của bạn bây giờ có những đặc điểm này:
                    </p>
                    
                    <div style="background: #fff; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border-left: 5px solid #48CAE4;">
                        <ul style="list-style: none; padding: 0; margin: 0;">
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Không cần xem bảng lương hàng tháng</strong> - Thu nhập thụ động đã đủ trang trải gần như mọi chi phí thiết yếu.</div>
                            </li>
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Từ chối công việc vì "không hợp"</strong> - Dù lương cao, nếu không đam mê/phù hợp giá trị, bạn không làm.</div>
                            </li>
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Bắt đầu suy nghĩ về "di sản" và "ảnh hưởng"</strong> - Không chỉ giàu có, mà muốn để lại dấu ấn.</div>
                            </li>
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Được mời làm cố vấn, mentor, góp vốn</strong> - Người ta tìm đến bạn vì kinh nghiệm và tiềm lực tài chính.</div>
                            </li>
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Chi tiền cho trải nghiệm, không còn vật chất</strong> - Du lịch sang, học tập sâu, kết nối ý nghĩa - không phải túi xách, đồng hồ.</div>
                            </li>
                            <li style="display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Có "luxury problems"</strong> - Lo về thuế, cấu trúc tài sản, tối ưu di sản - không phải lo đủ tiền ăn.</div>
                            </li>
                        </ul>
                    </div>

                    <p style="margin-top: 25px; font-weight: 600; color: #264653; text-align: center; font-style: italic; font-size: 15px;">
                        "Bạn đang ở trạng thái 'tự do về tài chính, nhưng chưa tự do về thời gian' - có tiền nhưng vẫn bận rộn với công việc, dự án, cam kết."
                    </p>
                </div>`
            },
            {
                heading: "3. Tại Sao Cấp Độ 5 Là \"The Comfort Ceiling\" (Trần Thoải Mái)?",
                body: `<p>Đây là cấp độ mà nhiều người thành công vô tình mắc kẹt - không phải vì thiếu tiền, mà vì thiếu rõ ràng về mục đích tiếp theo.</p>
                <p><strong>Về mặt tâm lý học:</strong></p>
                <ul>
                    <li><strong>Identity Crisis (Khủng hoảng bản sắc):</strong> Suốt đời bạn được định nghĩa qua công việc, thành tích, thu nhập. Giờ khi đã "đủ", bạn là ai? Làm gì tiếp theo?</li>
                    <li><strong>Purpose Vacuum (Chân không mục đích):</strong> Khi sinh tồn không còn là mục tiêu, não bộ lúng túng. "Vậy mình sống để làm gì?"</li>
                    <li><strong>The Paradox of Choice (Nghịch lý của sự lựa chọn):</strong> Có quá nhiều lựa chọn → khó chọn → anxiety → không làm gì cả</li>
                    <li><strong>Guilt of Success (Tội lỗi vì thành công):</strong> "Mình may mắn quá, không xứng đáng" → sabotage vô thức → không dám tiến xa hơn</li>
                </ul>
                <p><strong>Về mặt thực tế:</strong></p>
                <ul>
                    <li>Workaholic Trap (Bẫy nghiện làm việc): Làm việc đã thành thói quen, không biết sống thế nào khi không làm</li>
                    <li>Social Pressure (Áp lực xã hội): Bạn bè, gia đình kỳ vọng bạn "làm nhiều hơn, kiếm nhiều hơn" - khó nói "mình muốn slow down"</li>
                    <li>Fear of Irrelevance (Sợ trở nên không quan trọng): Nghỉ việc = mất danh tiếng, mất mạng lưới, mất ảnh hưởng</li>
                    <li>Lack of Legacy Vision (Thiếu tầm nhìn di sản): Giàu rồi nhưng chưa biết muốn để lại gì cho đời</li>
                </ul>`
            },
            {
                heading: "4. Hành Động Chuyển Hóa - Từ Vững Vàng Đến Tự Do Toàn Diện",
                body: `<p>Ở cấp độ 5, bạn không cần "làm gì để kiếm tiền". Bạn cần làm gì để sống ý nghĩa.</p>
                <p><strong>Chiến lược 1: "Design Your Ideal Life" (Thiết kế cuộc sống lý tưởng)</strong></p>
                <p>Viết ra một ngày lý tưởng (Ideal Day) của bạn 5 năm sau. Tính toán ngược: Cần bao nhiêu tài sản để sinh ra số tiền đó? (Quy tắc 4%). Mục tiêu: Rõ ràng hóa đích đến.</p>
                <p><strong>Chiến lược 2: "Build Multiple Income Streams at Scale" (Xây nhiều dòng thu nhập lớn)</strong></p>
                <p>Mô hình 7 dòng thu nhập lý tưởng: Earned Income (20-30%), Business Income (15-25%), Investment Income (20-30%), Rental Income (10-15%), Royalty Income (5-10%), Capital Gains (5-15%), Angel/VC Returns (5-10%).</p>
                <p><strong>Chiến lược 3: "Wealth Preservation & Growth" (Bảo toàn và tăng trưởng tài sản)</strong></p>
                <p>Quy tắc phân bổ: 50% Conservative, 30% Moderate, 15% Aggressive, 5% Cash. Bổ sung: Bảo vệ tài sản (Trust, Foundation) và Hoạch định di sản (Estate Planning).</p>
                <p><strong>Chiến lược 4: "Impact & Legacy" (Ảnh hưởng và Di sản)</strong></p>
                <p>Mentorship at Scale, Philanthropy (Từ thiện có chiến lược), Building Institutions (Xây dựng tổ chức).</p>
                <p><strong>Chiến lược 5: "Optimize Health & Relationships" (Tối ưu sức khỏe và mối quan hệ)</strong></p>
                <p>Đầu tư vào check-up sức khỏe, dinh dưỡng, tinh thần. Dành thời gian chất lượng cho gia đình, tái kết nối bạn bè.</p>`
            },
            {
                heading: "5. Nếu Bạn Không Thay Đổi...",
                body: `<div style="background-color: rgba(72, 202, 228, 0.1); padding: 25px; border-radius: 16px; border: 1px solid rgba(72, 202, 228, 0.3); box-shadow: 0 4px 15px rgba(72, 202, 228, 0.1);">
                    <p style="font-size: 16px; color: #333; margin-bottom: 20px; text-align: justify; line-height: 1.6;">
                        Cấp độ 5 có một nguy hiểm lớn: <strong>Sống giàu có nhưng không hạnh phúc.</strong>
                    </p>
                    
                    <div style="background: #fff; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border-left: 5px solid #F94144; margin-bottom: 20px;">
                        <p style="color: #F94144; font-weight: 800; margin-bottom: 15px; text-transform: uppercase; font-size: 14px; letter-spacing: 1px;">
                             ⚠️ Nếu dừng lại ở đây:
                        </p>
                        <ul style="list-style: none; padding: 0; margin: 0;">
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Về tài chính:</strong> Giàu có nhưng vẫn lo lắng, stress, không ngừng làm việc.</div>
                            </li>
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Về sức khỏe:</strong> Kiếm được tiền nhưng đánh mất sức khỏe.</div>
                            </li>
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Về gia đình:</strong> Con cái lớn lên xa lạ, vợ/chồng chỉ còn là "người cùng nhà".</div>
                            </li>
                            <li style="display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Về ý nghĩa:</strong> 60-70 tuổi nhìn lại, hối tiếc vì "sống để làm việc" thay vì "làm việc để sống".</div>
                            </li>
                        </ul>
                    </div>

                    <div style="background: #fff; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border-left: 5px solid #48CAE4;">
                        <p style="color: #48CAE4; font-weight: 800; margin-bottom: 15px; text-transform: uppercase; font-size: 14px; letter-spacing: 1px;">
                             🚀 Nhưng nếu bạn hành động đúng:
                        </p>
                        <ul style="list-style: none; padding: 0; margin: 0;">
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>2-3 năm sau:</strong> Đạt Financial Freedom - làm việc 100% vì đam mê, 0% vì tiền.</div>
                            </li>
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>5 năm sau:</strong> Cấp độ 6 - tài sản tự tăng trưởng, bạn tự do toàn diện.</div>
                            </li>
                            <li style="display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>20 năm sau:</strong> Để lại di sản lớn cho con cháu và xã hội.</div>
                            </li>
                        </ul>
                    </div>
                </div>`
            },
            {
                heading: "6. Ưu Tiên 30 Ngày - Kế Hoạch Chuyển Hóa",
                body: `<p><strong>Tuần 1: Định nghĩa lại "Thành công"</strong></p>
                <ul>
                    <li>Viết câu trả lời cho: "Thành công với tôi là gì?", vẽ Ideal Day</li>
                    <li>Tính toán Financial Freedom Number và timeline</li>
                </ul>
                <p><strong>Tuần 2: Đánh giá và tái cấu trúc dòng thu nhập</strong></p>
                <ul>
                    <li>Đánh giá nguồn thu nhập, lập kế hoạch tự động hóa/outsource</li>
                    <li>Mục tiêu: 80% thu nhập là passive trong 12 tháng</li>
                </ul>
                <p><strong>Tuần 3: Lập kế hoạch di sản</strong></p>
                <ul>
                    <li>Gặp luật sư/chuyên gia làm di chúc, Trust/quỹ</li>
                    <li>Brainstorm và bắt đầu 1 mảng đóng góp xã hội</li>
                </ul>`
            },
            {
                heading: "7. Thông Điệp Từ Bác Sĩ Tài Chính",
                body: `<p>Này bạn,</p>
                <p>Nếu bạn đang ở cấp độ 5, tôi muốn nói: Bạn đã chinh phục trò chơi mà 70% người không bao giờ thắng được. Nhưng giờ, tôi muốn hỏi bạn một câu hỏi quan trọng nhất: "Tại sao bạn muốn giàu?"</p>
                <p>Sự thật là: Tiền chỉ là công cụ. Mục đích mới là điều quan trọng. Cấp độ 5 là lúc bạn phải chuyển từ "làm giàu" sang "sống giàu" - nghĩa là sống một cuộc đời giàu có cả về vật chất lẫn tinh thần.</p>
                <p>Tôi đã gặp hai loại người ở cấp độ 5: Loại 1 giàu có nhưng mắc kẹt, Loại 2 giàu có và tự do. Bạn muốn là loại nào?</p>
                <p>Cấp độ 6 không xa - nơi bạn hoàn toàn tự do. Và đường đến đó không phải bằng việc kiếm thêm tiền, mà bằng việc sống đúng với giá trị của bạn.</p>
                <hr style="margin: 24px 0; border-top: 1px dashed var(--color-border);">
                <div style="background-color: var(--color-primary-light); padding: 16px; border-radius: 8px; font-style: italic; text-align: center;">
                    "Giàu có nhất không phải người có nhiều tiền nhất, mà là người cần ít tiền nhất để hạnh phúc. Tự do nhất không phải người làm được mọi thứ, mà là người chỉ làm những gì mình muốn."
                    <br><strong>💚 Bác sĩ Tài chính</strong>
                </div>`
            }
        ]
    },
    6: {
        title: "Độc Lập Tài Chính",
        subtitle: "Khi Bạn Sống Cuộc Đời Mình Muốn, Không Phải Cuộc Đời Người Khác Muốn",
        color: "#2A9D8F", // Teal
        className: "level-6",
        characteristics: [
            "Tự do hoàn toàn về tài chính",
            "Làm việc vì đam mê, không vì tiền",
            "Tập trung vào di sản và ảnh hưởng",
            "Sống tối giản giữa sự dồi dào"
        ],
        content: [
            {
                heading: "1. Chẩn Đoán Tình Trạng",
                body: `<div style="background-color: rgba(42, 157, 143, 0.1); padding: 25px; border-radius: 16px; border: 1px solid rgba(42, 157, 143, 0.3); box-shadow: 0 4px 15px rgba(42, 157, 143, 0.1);">
                    <p style="font-size: 16px; color: #333; margin-bottom: 20px; text-align: justify; line-height: 1.6;">
                        Chào mừng đến với top 15%. Bạn đã đạt được điều mà hầu hết chỉ dám mơ: <strong>Financial Independence - độc lập tài chính hoàn toàn.</strong>
                    </p>
                    
                    <div style="background: #fff; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border-left: 5px solid #2A9D8F;">
                        <p style="color: #2A9D8F; font-weight: 800; margin-bottom: 15px; text-transform: uppercase; font-size: 14px; letter-spacing: 1px;">
                             🔍 4 Chỉ số nhận diện cấp độ này:
                        </p>
                        <ul style="list-style: none; padding: 0; margin: 0;">
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Chi phí chỉ chiếm mức 30-50% thu nhập</strong> - Bạn chi ít hơn một nửa những gì kiếm được.</div>
                            </li>
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Thu nhập từ Tiết kiệm và Đầu tư trên 100% CHI PHÍ THIẾT YẾU</strong> - Thu nhập thụ động vượt xa chi tiêu, tiền dư tự động tái đầu tư.</div>
                            </li>
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Tổng nợ phải trả (gốc + lãi) hàng tháng là 0% (hoặc từ 10-30% Nợ tốt)</strong> - Chỉ vay để tận dụng lợi thế thuế hoặc đầu tư sinh lời cao hơn lãi vay.</div>
                            </li>
                            <li style="display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Tài sản có thể gánh vác 10-25 năm chi phí</strong> - Ngừng làm việc hoàn toàn hôm nay, 10-25 năm sau mới cần suy nghĩ lại.</div>
                            </li>
                        </ul>
                    </div>

                    <p style="margin-top: 25px; font-weight: 600; color: #2A9D8F; text-align: center; font-style: italic; font-size: 15px;">
                        "Bạn đã đạt được 'fuck you money' như người ta vẫn nói - nghĩa là có đủ tiền để nói 'không' với bất cứ ai, bất cứ điều gì không phù hợp với bạn."
                    </p>
                </div>`
            },
            {
                heading: "2. Những Biểu Hiện Chính ở Cấp Độ này",
                body: `<div style="background-color: rgba(42, 157, 143, 0.1); padding: 25px; border-radius: 16px; border: 1px solid rgba(42, 157, 143, 0.3); box-shadow: 0 4px 15px rgba(42, 157, 143, 0.1);">
                    <p style="font-size: 16px; color: #333; margin-bottom: 20px; text-align: justify; line-height: 1.6;">
                        Cuộc sống của bạn ở cấp độ này có những đặc điểm rất khác biệt:
                    </p>
                    
                    <div style="background: #fff; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border-left: 5px solid #2A9D8F;">
                        <ul style="list-style: none; padding: 0; margin: 0;">
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Làm việc 100% vì đam mê, 0% vì tiền</strong> - Có thể nghỉ việc bất cứ lúc nào mà không ảnh hưởng đến lối sống.</div>
                            </li>
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Từ chối mọi thứ không align với giá trị</strong> - Dự án không thú vị dù lương cao? Không. Mối quan hệ toxic dù có lợi? Không.</div>
                            </li>
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Thời gian là tài sản quý nhất</strong> - Bảo vệ lịch như bảo vệ két sắt. Chỉ dành cho người và việc thực sự quan trọng.</div>
                            </li>
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Tập trung vào "legacy" và "impact"</strong> - Suy nghĩ về câu hỏi: "50 năm sau tôi mất, người ta sẽ nhớ tôi vì điều gì?".</div>
                            </li>
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Cho đi nhiều hơn nhận</strong> - Mentor miễn phí, từ thiện có chiến lược, đầu tư vào người/dự án vì tin tưởng chứ không chỉ vì lợi nhuận.</div>
                            </li>
                            <li style="display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Cuộc sống đơn giản hóa</strong> - Ít đồ đạc, ít cam kết vô nghĩa, nhiều không gian thở.</div>
                            </li>
                        </ul>
                    </div>

                    <p style="margin-top: 25px; font-weight: 600; color: #2A9D8F; text-align: center; font-style: italic; font-size: 15px;">
                        "Bạn đang ở trạng thái 'tự do toàn diện' - tự do về tiền, thời gian, lựa chọn, và ý nghĩa."
                    </p>
                </div>`
            },
            {
                heading: "3. Tại Sao Cấp Độ 6 Lại Có \"Nỗi Đau Riêng\"?",
                body: `<p>Nghe có vẻ nghịch lý, nhưng đạt được độc lập tài chính cũng đi kèm với những thử thách tâm lý sâu sắc.</p>
                <p><strong>Về mặt tâm lý học:</strong></p>
                <ul>
                    <li><strong>Existential Crisis (Khủng hoảng hiện sinh):</strong> Khi mọi nhu cầu vật chất đều được thỏa mãn, câu hỏi "tôi sống để làm gì?" trở nên đè nặng</li>
                    <li><strong>Loss of Structure (Mất cấu trúc):</strong> Không còn công việc 9-5 để định hướng ngày tháng → cảm giác lạc lõng, mất phương hướng</li>
                    <li><strong>Social Isolation (Cô lập xã hội):</strong> Ít người hiểu được vị trí của bạn → khó chia sẻ, khó kết nối sâu sắc</li>
                    <li><strong>Imposter Syndrome tầng cao:</strong> "Mình may mắn quá, không xứng đáng" → tự sabotage hoặc không dám tận hưởng thành quả</li>
                    <li><strong>Fear of Losing It All (Sợ mất tất cả):</strong> Càng có nhiều, càng sợ mất → lo lắng thái quá về thị trường, an ninh, bảo vệ tài sản</li>
                </ul>
                <p><strong>Về mặt thực tế:</strong></p>
                <ul>
                    <li>Relationship Challenges (Thách thức trong mối quan hệ): Bạn bè cũ xa cách, người thân kỳ vọng hỗ trợ, khó tìm bạn đời cùng tầm</li>
                    <li>Lack of Purpose (Thiếu mục đích): Không còn mục tiêu kiếm tiền rõ ràng → lúng túng về ý nghĩa cuộc sống</li>
                    <li>Decision Paralysis (Tê liệt quyết định): Quá nhiều lựa chọn → không biết chọn gì</li>
                    <li>The Hedonic Treadmill (Vòng quay khoái lạc): Mọi thứ cao cấp trở thành "bình thường" → khó cảm thấy hạnh phúc như trước</li>
                </ul>`
            },
            {
                heading: "4. Hành Động Siêu Việt - Từ Độc Lập Đến Ý Nghĩa",
                body: `<p>Ở cấp độ 6, bạn không cần "chiến lược kiếm tiền". Bạn cần triết lý sống.</p>
                <p><strong>Chiến lược 1: "Ikigai Optimization" (Tối ưu hóa lý do sống)</strong></p>
                <p>Tìm giao điểm của 4 vòng tròn: Yêu thích, Giỏi, Thế giới cần, Có thể trả tiền (đã xong). Bài tập: Liệt kê việc làm cả ngày không chán, kỹ năng đặc biệt, vấn đề thế giới muốn giải quyết.</p>
                <p><strong>Chiến lược 2: "Portfolio of Pursuits" (Danh mục đam mê)</strong></p>
                <p>Mô hình 4P: Passion (Đam mê 30-40%), Purpose (Mục đích 30-40%), Profit (Lợi nhuận 10-20%), Play (Vui chơi 10-20%).</p>
                <p><strong>Chiến lược 3: "Wealth Perpetuation Machine" (Máy móc tăng trưởng tài sản vĩnh viễn)</strong></p>
                <p>Mục tiêu: Tài sản tự tăng trưởng mãi mãi. Cấu trúc: Core Portfolio (80%), Legacy Assets (15%), Impact Investments (5%). Nguyên tắc vàng: Chỉ rút tối đa 3-4% tài sản/năm, Reinvest 100% lợi nhuận vượt chi tiêu.</p>
                <p><strong>Chiến lược 4: "Multi-Generational Wealth Transfer" (Truyền tải tài sản đa thế hệ)</strong></p>
                <p>3 tầng di sản: Financial Capital (Vốn tài chính), Intellectual Capital (Vốn trí tuệ), Social Capital (Vốn xã hội). Ví dụ: Cấu trúc trao quyền dần dần theo các cột mốc cuộc đời.</p>
                <p><strong>Chiến lược 5: "Build a Lasting Legacy" (Xây dựng di sản bền vững)</strong></p>
                <p>3 cách: Institutional Legacy (Di sản thể chế - Quỹ, trường học), Intellectual Legacy (Di sản trí tuệ - Sách, khóa học), Impact Legacy (Di sản ảnh hưởng - Giải pháp hệ thống).</p>`
            },
            {
                heading: "5. Nếu Bạn Không Chú Ý...",
                body: `<div style="background-color: rgba(42, 157, 143, 0.1); padding: 25px; border-radius: 16px; border: 1px solid rgba(42, 157, 143, 0.3); box-shadow: 0 4px 15px rgba(42, 157, 143, 0.1);">
                    <p style="font-size: 16px; color: #333; margin-bottom: 20px; text-align: justify; line-height: 1.6;">
                          Cấp độ 6 có nguy hiểm riêng - không phải nghèo, mà là sống vô nghĩa.
                    </p>
                    
                    <div style="background: #fff; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border-left: 5px solid #F94144; margin-bottom: 20px;">
                        <p style="color: #F94144; font-weight: 800; margin-bottom: 15px; text-transform: uppercase; font-size: 14px; letter-spacing: 1px;">
                             ⚠️ Rủi ro hiện sinh:
                        </p>
                        <ul style="list-style: none; padding: 0; margin: 0;">
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;">Giàu có nhưng cô đơn, Tự do nhưng lạc lõng, Thành công nhưng trống rỗng.</div>
                            </li>
                            <li style="display: flex; align-items: flex-start;">
                                <div style="color: #444;">Để lại tiền nhưng không để lại gì khác: Con cháu giàu có nhưng hư hỏng.</div>
                            </li>
                        </ul>
                    </div>

                    <div style="background: #fff; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border-left: 5px solid #2A9D8F;">
                        <p style="color: #2A9D8F; font-weight: 800; margin-bottom: 15px; text-transform: uppercase; font-size: 14px; letter-spacing: 1px;">
                             🚀 Đích đến thực sự:
                        </p>
                        <ul style="list-style: none; padding: 0; margin: 0;">
                            <li style="display: flex; align-items: flex-start;">
                                <div style="color: #444;">Hạnh phúc thực sự, Ảnh hưởng lớn, Di sản bền vững, Cuộc sống trọn vẹn.</div>
                            </li>
                        </ul>
                    </div>
                </div>`
            },
            {
                heading: "6. Ưu Tiên 30 Ngày - Kế Hoạch Sống Trọn Vẹn",
                body: `<p><strong>Tuần 1: Tìm Ikigai của bạn</strong></p>
                <ul>
                    <li>Làm bài tập Ikigai, Viết "Personal Mission Statement".</li>
                </ul>
                <p><strong>Tuần 2: Thiết kế Portfolio of Pursuits</strong></p>
                <ul>
                    <li>Phân bổ thời gian theo mô hình 4P, lên lịch và thử nghiệm 1 tuần lý tưởng.</li>
                </ul>
                <p><strong>Tuần 3: Lập kế hoạch di sản</strong></p>
                <ul>
                    <li>Quyết định loại di sản, bắt đầu 1 dự án nhỏ, gặp luật sư thiết lập cấu trúc.</li>
                </ul>
                <p><strong>Tuần 4: Nuôi dưỡng mối quan hệ</strong></p>
                <ul>
                    <li>Tổ chức dinner/retreat, viết thư tay biết ơn, lên kế hoạch "family traditions".</li>
                </ul>
                <p><strong>Mục tiêu cột mốc 30 ngày:</strong></p>
                <ul>
                    <li>✅ Rõ ràng Ikigai và Mission Statement</li>
                    <li>✅ Sống theo Portfolio of Pursuits ít nhất 2 tuần</li>
                    <li>✅ Bắt đầu 1 dự án di sản cụ thể</li>
                    <li>✅ Cải thiện đáng kể chất lượng mối quan hệ quan trọng</li>
                </ul>`
            },
            {
                heading: "7. Thông Điệp Từ Bác Sĩ Tài Chính",
                body: `<p>Này bạn,</p>
                <p>Nếu bạn đang ở cấp độ 6, tôi muốn nói: Bạn đã thắng trò chơi tài chính. Bạn có tự do mà 95% dân số khao khát.</p>
                <p>Nhưng bây giờ, câu hỏi không còn là "Làm sao để giàu hơn?" Câu hỏi là: "Làm sao để sống xứng đáng với những gì mình có?"</p>
                <p>Độc lập tài chính không phải đích đến. Nó chỉ là khởi đầu. Khởi đầu của cuộc sống bạn thực sự muốn sống. Khởi đầu của ảnh hưởng bạn muốn tạo ra.</p>
                <p>Một câu hỏi cuối cùng dành cho bạn: "Nếu hôm nay là ngày cuối cùng, bạn có hối tiếc về cách mình đã sống không?" Nếu câu trả lời là "có" - đây là lúc thay đổi. Vì ở cấp độ 6, bạn có thứ quý giá nhất: Quyền tự do chọn lựa.</p>
                <p>Hãy chọn sống một cuộc đời trọn vẹn. Hãy chọn tạo ảnh hưởng. Hãy chọn để lại di sản.</p>
                <p>Cấp độ 7 đang chờ - nơi bạn không chỉ tự do, mà còn giúp người khác tự do.</p>
                <hr style="margin: 24px 0; border-top: 1px dashed var(--color-border);">
                <div style="background-color: var(--color-primary-light); padding: 16px; border-radius: 8px; font-style: italic; text-align: center;">
                    "Thành công cao nhất không phải có nhiều tiền nhất, mà là sống cuộc đời mình muốn, tạo ảnh hưởng mình tin, và về già không hối tiếc."
                    <br><strong>💚 Bác sĩ Tài chính</strong>
                </div>`
            }
        ]
    },
    7: {
        title: "Tự Do Tài Chính",
        subtitle: "Khi Bạn Sống Để Cho Đi, Không Còn Để Nhận",
        color: "#277DA1", // Dark Blue
        className: "level-7",
        characteristics: [
            "Tiền không còn là áp lực",
            "Sống theo giá trị cá nhân",
            "Ra quyết định phi cảm xúc",
            "Tư duy trao đi – phụng sự"
        ],
        content: [
            {
                heading: "1. Chẩn Đoán Tình Trạng",
                body: `<div style="background-color: rgba(39, 125, 161, 0.1); padding: 25px; border-radius: 16px; border: 1px solid rgba(39, 125, 161, 0.3); box-shadow: 0 4px 15px rgba(39, 125, 161, 0.1);">
                    <p style="font-size: 16px; color: #333; margin-bottom: 20px; text-align: justify; line-height: 1.6;">
                        Chào mừng đến với top 5%. Bạn đã đạt đến đỉnh cao của kim tự tháp tài chính - nơi tài sản tự tăng trưởng nhanh hơn khả năng tiêu của bạn.
                    </p>
                    
                    <div style="background: #fff; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border-left: 5px solid #277DA1;">
                        <p style="color: #277DA1; font-weight: 800; margin-bottom: 15px; text-transform: uppercase; font-size: 14px; letter-spacing: 1px;">
                             🔍 4 Chỉ số nhận diện cấp độ này:
                        </p>
                        <ul style="list-style: none; padding: 0; margin: 0;">
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Chi phí dưới 30% Thu nhập</strong> - Bạn chỉ dùng một phần nhỏ thu nhập, phần lớn được tái đầu tư hoặc cho đi.</div>
                            </li>
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Thu nhập từ Tiết kiệm và Đầu tư lớn hơn 100% Tổng chi phí</strong> - Thu nhập thụ động gấp nhiều lần chi tiêu, tiền tăng nhanh hơn bạn kịp chi.</div>
                            </li>
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Tổng nợ phải trả (gốc + lãi) hàng tháng là 0% (hoặc từ 30-50% Nợ tốt) (100% đòn bẩy chiến lược)</strong> - Chỉ vay khi lợi nhuận đầu tư >> lãi vay, thuần túy tối ưu hóa tài chính.</div>
                            </li>
                            <li style="display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Tài sản có thể gánh vác trên 25 năm chi phí</strong> - Thậm chí có thể không bao giờ phải chạm vào gốc, chỉ sống bằng lợi nhuận.</div>
                            </li>
                        </ul>
                    </div>

                    <p style="margin-top: 25px; font-weight: 600; color: #277DA1; text-align: center; font-style: italic; font-size: 15px;">
                         "Bạn đã đạt 'generational wealth' - khối tài sản không chỉ đủ cho bạn, mà còn cho con cháu nhiều đời sau."
                    </p>
                </div>`
            },
            {
                heading: "2. Những Biểu Hiện Chính ở Cấp Độ này",
                body: `<div style="background-color: rgba(39, 125, 161, 0.1); padding: 25px; border-radius: 16px; border: 1px solid rgba(39, 125, 161, 0.3); box-shadow: 0 4px 15px rgba(39, 125, 161, 0.1);">
                    <p style="font-size: 16px; color: #333; margin-bottom: 20px; text-align: justify; line-height: 1.6;">
                          Cuộc sống của bạn ở cấp độ này có những đặc điểm rất khác biệt:
                    </p>
                    
                    <div style="background: #fff; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border-left: 5px solid #277DA1;">
                        <ul style="list-style: none; padding: 0; margin: 0;">
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Tiền không còn là chủ đề</strong> - Bạn thậm chí không nhớ mình kiếm được bao nhiêu tháng trước.</div>
                            </li>
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Mọi quyết định đều dựa trên giá trị, không phải giá cả</strong> - "Điều này có ý nghĩa không?" chứ không phải "Điều này có đáng tiền không?".</div>
                            </li>
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Cho đi nhiều hơn nhận rất nhiều</strong> - 50-80% thu nhập/tài sản dùng để tạo ảnh hưởng xã hội.</div>
                            </li>
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Được tôn trọng vì đóng góp, không vì tiền</strong> - Người ta nhớ bạn vì những gì bạn xây dựng, không phải vì bạn giàu.</div>
                            </li>
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Sống đơn giản giữa sự dồi dào</strong> - Có thể mua mọi thứ xa xỉ, nhưng chọn sống tối giản vì biết thứ gì thực sự quan trọng.</div>
                            </li>
                            <li style="display: flex; align-items: flex-start;">
                                <div style="color: #444;"><strong>Thời gian 100% tự do</strong> - Không ai có thể "mua" thời gian của bạn, chỉ có bạn quyết định dành nó cho ai, cho việc gì.</div>
                            </li>
                        </ul>
                    </div>

                    <p style="margin-top: 25px; font-weight: 600; color: #277DA1; text-align: center; font-style: italic; font-size: 15px;">
                        "Bạn đang ở trạng thái 'tự do tuyệt đối' - không chỉ về tài chính, mà về mọi mặt của cuộc sống."
                    </p>
                </div>`
            },
            {
                heading: "3. Tại Sao Cấp Độ 7 Là \"The Loneliest Peak\" (Đỉnh Núi Cô Đơn Nhất)?",
                body: `<p>Nghịch lý lớn nhất: Càng lên cao, càng ít người hiểu bạn.</p>
                <p><strong>Về mặt tâm lý học:</strong></p>
                <ul>
                    <li><strong>Radical Isolation (Cô lập triệt để):</strong> Rất ít người ở cùng cấp độ để chia sẻ. Bạn bè cũ không hiểu. Người mới tiếp cận vì tiền, không vì bạn.</li>
                    <li><strong>Meaning Crisis (Khủng hoảng ý nghĩa sâu sắc):</strong> "Tôi đã đạt mọi thứ, vậy giờ sao?" - cảm giác trống rỗng nếu không tìm ra mục đích cao hơn</li>
                    <li><strong>Legacy Anxiety (Lo lắng về di sản):</strong> Liệu những gì mình để lại có thực sự quan trọng? Có bị lãng quên sau 50-100 năm?</li>
                </ul>
                <p><strong>Về mặt thực tế:</strong></p>
                <ul>
                    <li>Family Dynamics (Động lực gia đình phức tạp): Con cái khó dạy về giá trị tiền bạc, người thân xin hỗ trợ, khó phân biệt ai yêu bạn thật.</li>
                    <li>Trust Issues (Vấn đề về lòng tin): Khó tin tưởng hoàn toàn, mọi mối quan hệ mới đều bị nghi ngờ động cơ.</li>
                    <li>Happiness (Hạnh phúc): Mọi trải nghiệm xa xỉ đều "bình thường hóa", khó tìm được niềm vui đơn giản.</li>
                </ul>`
            },
            {
                heading: "4. Hành Động Siêu Mục Đích - Từ Tự Do Đến Vĩnh Hằng",
                body: `<p>Ở cấp độ 7, không còn là về bạn nữa. Đây là về thế giới bạn để lại.</p>
                <p><strong>Chiến lược 1: "Transcendent Purpose" (Mục đích siêu việt)</strong></p>
                <p>Tìm sứ mệnh lớn hơn bản thân: Solve a Systemic Problem (Giải quyết vấn đề hệ thống), Shift Collective Consciousness (Thay đổi nhận thức tập thể), Create Lasting Institutions (Tạo thể chế bền vững).</p>
                <p><strong>Chiến lược 2: "Perpetual Wealth Engine" (Động cơ tài sản vĩnh viễn)</strong></p>
                <p>Mô hình Family Office: Core Endowment (60-70%), Growth Portfolio (20-25%), Impact Portfolio (10-15%). Nguyên tắc 4% Withdrawal Rule, 100% Reinvestment phần tăng trưởng.</p>
                <p><strong>Chiến lược 3: "Exponential Giving" (Cho đi theo cấp số nhân)</strong></p>
                <p>3 cấp độ: Direct Charity (Từ thiện trực tiếp), Capacity Building (Xây dựng năng lực), Systems Change (Thay đổi hệ thống). Mô hình "Give While You Live".</p>
                <p><strong>Chiến lược 4: "Raise Conscious Heirs" (Nuôi dạy thế hệ kế thừa có ý thức)</strong></p>
                <p>Cách phá vỡ "Không ai giàu 3 họ": Education about Money, Values over Valuables, Conditional Inheritance (Thừa kế có điều kiện), Involve in Philanthropy.</p>
                <p><strong>Chiến lược 5: "Live Fully Until the End" (Sống trọn vẹn đến hơi thở cuối cùng)</strong></p>
                <p>Triết lý "Die with Zero". Thiết kế cuộc đời theo Season: Xây dựng (20-40), Cân bằng (40-60), Tận hưởng (60-75), Kết nối (75+).</p>`
            },
            {
                heading: "5. Nếu Bạn Không Sống Có Ý Thức...",
                body: `<div style="background-color: rgba(39, 125, 161, 0.1); padding: 25px; border-radius: 16px; border: 1px solid rgba(39, 125, 161, 0.3); box-shadow: 0 4px 15px rgba(39, 125, 161, 0.1);">
                    <p style="font-size: 16px; color: #333; margin-bottom: 20px; text-align: justify; line-height: 1.6;">
                          Cấp độ 7 có một bi kịch riêng:
                    </p>
                    
                    <div style="background: #fff; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border-left: 5px solid #F94144; margin-bottom: 20px;">
                        <p style="color: #F94144; font-weight: 800; margin-bottom: 15px; text-transform: uppercase; font-size: 14px; letter-spacing: 1px;">
                             ⚠️ Rủi ro di sản:
                        </p>
                        <ul style="list-style: none; padding: 0; margin: 0;">
                            <li style="margin-bottom: 12px; display: flex; align-items: flex-start;">
                                <div style="color: #444;">Để lại khối tài sản khổng lồ nhưng con cháu tiêu tán. Sống giàu có nhưng trống rỗng. Chết đi bị nhớ đến vì "người giàu" chứ không phải "người tốt".</div>
                            </li>
                        </ul>
                    </div>

                    <div style="background: #fff; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border-left: 5px solid #277DA1;">
                        <p style="color: #277DA1; font-weight: 800; margin-bottom: 15px; text-transform: uppercase; font-size: 14px; letter-spacing: 1px;">
                             🚀 Di sản vĩnh cửu:
                        </p>
                        <ul style="list-style: none; padding: 0; margin: 0;">
                            <li style="display: flex; align-items: flex-start;">
                                <div style="color: #444;">Tạo hệ thống tài chính vượt thời gian. Thay đổi đời hàng nghìn người. Tạo di sản về giá trị. 100 năm sau tên bạn vẫn được nhắc đến với lòng biết ơn.</div>
                            </li>
                        </ul>
                    </div>
                </div>`
            },
            {
                heading: "6. Ưu Tiên 30 Ngày - Kế Hoạch Sống Di Sản",
                body: `<p><strong>Tuần 1: Định nghĩa di sản cuối cùng</strong></p>
                <ul>
                    <li>Viết "Legacy Statement" - Tuyên ngôn di sản: "100 năm sau, tôi muốn được nhớ đến vì..."</li>
                </ul>
                <p><strong>Tuần 2: Thiết kế cấu trúc tài sản vĩnh viễn</strong></p>
                <ul>
                    <li>Thiết lập Family Office/Foundation, lập kế hoạch phân bổ, viết di chúc.</li>
                </ul>
                <p><strong>Tuần 3: Bắt đầu dự án di sản đầu tiên</strong></p>
                <ul>
                    <li>Chọn 1 vấn đề muốn giải quyết và bắt đầu (Scholarship, Thư viện, Khóa học...).</li>
                </ul>
                <p><strong>Tuần 4: Thiết kế "Final Chapter" (Chương cuối)</strong></p>
                <ul>
                    <li>Viết kế hoạch cho 20-30 năm cuối đời, chia sẻ với gia đình.</li>
                </ul>
                <p><strong>Mục tiêu cột mốc 30 ngày:</strong></p>
                <ul>
                    <li>✅ Có Legacy Statement rõ ràng</li>
                    <li>✅ Cấu trúc tài sản vĩnh viễn được thiết lập</li>
                    <li>✅ 1 dự án di sản đầu tiên đã khởi động</li>
                    <li>✅ Kế hoạch cho "chương cuối" đã được viết ra</li>
                </ul>`
            },
            {
                heading: "7. Thông Điệp Từ Bác Sĩ Tài Chính",
                body: `<p>Này bạn, nếu bạn đang ở cấp độ 7, tôi không biết nên chúc mừng hay lời động viên. Thử thách lớn nhất mới bắt đầu.</p>
                <p>Người hạnh phúc nhất không phải người giàu nhất, mà là người biết rõ mình sống vì điều gì. Sự khác biệt giữa sống để có và sống để cho.</p>
                <p>Bạn đã leo lên đỉnh núi tài chính. Giờ đây, bạn có 3 lựa chọn: Tự mãn, Quay về, hoặc Xây cầu. Tôi hy vọng bạn chọn Xây cầu - tạo di sản vĩnh cửu.</p>
                <p>Sứ mệnh cao nhất của người ở đỉnh không phải là hưởng thụ, mà là nâng đỡ. Không phải là tích lũy, mà là lan tỏa.</p>
                <hr style="margin: 24px 0; border-top: 1px dashed var(--color-border);">
                <div style="background-color: var(--color-primary-light); padding: 16px; border-radius: 8px; font-style: italic; text-align: center;">
                    "Cuối cùng, chúng ta sẽ không nhớ lời nói của kẻ thù, mà là sự im lặng của bạn bè. Chúng ta sẽ không được đo bằng tài sản tích lũy, mà bằng tác động để lại. Chúng ta sẽ không bất tử vì sống lâu, mà vì sống ý nghĩa."
                    <br><strong>💚 Bác sĩ Tài chính</strong>
                </div>`
            }
        ]
    }
};
