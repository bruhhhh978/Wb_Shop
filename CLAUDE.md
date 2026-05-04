# CLAUDE.md — KTV AI Services Website

Bạn là Claude, trợ lý lập trình trong Cursor cho dự án website **giới thiệu dịch vụ AI của KTV AI**.  
Mục tiêu: xây một website **đơn giản, dễ dùng, chuyên nghiệp, hiện đại** theo tinh thần design của ảnh tham chiếu.

## 1) Mục tiêu sản phẩm

- **Website marketing**: giới thiệu năng lực + dịch vụ AI, tạo niềm tin, chốt lead.
- **Ưu tiên**: tốc độ tải nhanh, UI tối giản, nội dung rõ ràng, CTA nổi bật, SEO tốt.
- **Ngôn ngữ**: tiếng Việt (có thể chuẩn bị sẵn cấu trúc để thêm EN sau).

## 2) Tham chiếu design (nguồn cảm hứng)

- Ảnh tham chiếu trong repo: `www.fillingpieces.com__ref=godly.png`
- “Tinh thần” cần bám:
  - **Layout theo nhịp editorial**: mảng ảnh/hero lớn, khoảng trắng rộng, bố cục sạch.
  - **Typography rõ ràng**: headline mạnh, body dễ đọc, ít trang trí.
  - **CTA tối giản**: button/outline gọn, tương phản tốt, không rườm rà.
  - **Chất “premium”**: hạn chế màu sắc loè loẹt; dùng palette trung tính; micro-interaction tinh tế.

## 3) IA (cấu trúc thông tin) khuyến nghị

Tối thiểu 1 landing page. Nếu làm nhiều trang, giữ tổng số trang ít và mạch lạc.

### Trang chủ (Landing)

- **Hero**
  - H1 rõ 1 câu: “KTV AI — triển khai AI thực chiến cho doanh nghiệp”
  - Subcopy ngắn: giá trị + đối tượng
  - CTA chính: “Nhận tư vấn” / “Đặt lịch”
  - CTA phụ: “Xem dịch vụ”
- **Dịch vụ (cards / grid)**
  - AI Chatbot/CSKH
  - Tự động hoá quy trình (RPA + AI)
  - Tư vấn & triển khai LLM nội bộ (RAG/Knowledge base)
  - Computer Vision / OCR
  - Dữ liệu & phân tích (BI/Forecasting)
- **Quy trình làm việc**
  - Khảo sát → POC → Triển khai → Vận hành
- **Case studies (nếu có)**
  - 2–4 items, nhấn vào “kết quả/impact”
- **Bảng gói / cách hợp tác**
  - Workshop, POC, Retainer, Project-based
- **FAQ**
- **Footer**
  - thông tin liên hệ, social, pháp lý

### Trang Dịch vụ (tuỳ chọn)

Một trang tổng hợp + trang chi tiết cho từng dịch vụ (nếu nội dung đủ).

### Trang Liên hệ

Form tối giản + thông tin liên hệ + lịch hẹn (nếu tích hợp).

## 4) Visual system (quy tắc UI)

### Tone & style

- **Tối giản**: ưu tiên cấu trúc và khoảng trắng hơn là “hiệu ứng”.
- **Chuyên nghiệp**: tránh gradients nặng, shadow dày, icon nhiều màu.
- **Hiện đại**: grid rõ ràng, responsive chuẩn, motion nhẹ.

### Layout

- **Container**: max-width 1200–1280px, padding ngang theo breakpoint.
- **Grid**: 12 cột (desktop), 6 (tablet), 4 (mobile).
- **Spacing**: theo thang 4/8px; section padding lớn (72–120px desktop).

### Typography

- Ưu tiên font sans hiện đại (Inter / system-ui).
- H1/H2 lớn, tracking nhẹ; body line-height ~1.6.
- Chỉ 2–3 cấp độ chữ chính; không quá nhiều kiểu.

### Màu sắc

- **Nền**: trắng/near-white hoặc near-black (có thể hỗ trợ dark mode sau).
- **Text**: xám đậm/đen; link & CTA dùng 1 màu nhấn duy nhất.
- **Border**: xám rất nhạt để phân tách thay vì shadow.

### Components

- **Button**
  - Primary: nền đậm + chữ sáng hoặc ngược lại
  - Secondary: outline
  - Hover/focus rõ ràng, không “nhảy layout”
- **Card**
  - Border mảnh, radius nhỏ (8–12)
  - Title + 1–2 dòng mô tả, 1 CTA nhỏ
- **Navbar**
  - Sticky tuỳ chọn, cao vừa phải, link ngắn gọn
- **Form**
  - Field label rõ, validation thân thiện

### Motion

- Dùng transition nhẹ (150–250ms), easing tự nhiên.
- Tránh parallax nặng; ưu tiên “fade/slide subtle”.

## 5) Nội dung & giọng văn (copy)

- **Rõ ràng, ngắn gọn, hướng kết quả**: nói “giảm thời gian xử lý 30%” thay vì “AI tiên tiến”.
- Mỗi section nên có:
  - 1 headline mạnh
  - 1–2 câu giải thích
  - bullet lợi ích cụ thể
- Tránh thuật ngữ dày đặc; nếu cần, giải thích 1 câu.

## 6) Chuẩn chất lượng bắt buộc

- **Responsive**: mobile-first, không vỡ layout.
- **Accessibility**: semantic HTML, alt text, focus state, contrast.
- **Performance**
  - Ảnh tối ưu (size phù hợp, lazy-load)
  - Tránh JS thừa; ưu tiên SSR/SSG nếu dùng framework phù hợp
- **SEO**
  - Title/description chuẩn
  - Headings theo thứ bậc (H1 duy nhất)
  - OpenGraph/Twitter cards

## 7) Tech stack đề xuất (khi bạn chưa chỉ định)

Nếu repo chưa có stack:

- **Next.js (App Router) + TypeScript**
- **Tailwind CSS** (hoặc CSS Modules + design tokens)
- **Component primitives**: Radix UI (tuỳ chọn)
- **Form**: React Hook Form + Zod (tuỳ chọn)

Nếu bạn chọn stack khác, hãy tự động điều chỉnh implementation theo stack đã có.

## 8) Quy tắc làm việc cho Claude (rất quan trọng)

- Luôn **bắt đầu từ mục tiêu UX**: “người dùng cần hiểu gì trong 5 giây đầu?”
- Chỉ đề xuất UI/animation khi **phục vụ rõ ràng** cho việc đọc nội dung và CTA.
- Mỗi thay đổi code cần:
  - giữ style tối giản/premium
  - không thêm dependency nếu chưa cần
  - có trạng thái loading/empty/error (nếu có data)
- Khi tạo file mới:
  - đặt tên rõ ràng, cấu trúc thư mục gọn
  - tách `components`/`sections`/`lib` hợp lý

## 9) Definition of Done (khi build landing)

- Landing page có đủ: Hero, Services, Process, Case studies (optional), Pricing/Engagement, FAQ, Contact CTA, Footer.
- Lighthouse (mục tiêu): Performance/Accessibility/Best Practices/SEO đều “xanh” ở mức hợp lý.
- Nội dung tiếng Việt mạch lạc, CTA hoạt động (form hoặc mailto).

