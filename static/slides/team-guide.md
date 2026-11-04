# BS RN Review

**Plugin hiện tại:** `bs-rn-review` v0.2.14  
**Dùng cho:** `v567app`, `v551-react-native`, `v560ns-mobile`

---

## 1. Plugin này giải quyết vấn đề gì?

Các app của team Mobile có kiến trúc và cách tổ chức code khác nhau, ví dụ: `v567app` dùng Expo CNG và Redux, `v560ns` lại dùng React Native bare và MobX, còn `v551` được tổ chức theo các module legacy. Một checklist chung cần có thêm thông tin riêng của từng app để review sát với project.

Skill review giúp AI làm theo checklist, nhưng nếu chỉ dựa vào hướng dẫn, AI vẫn có thể bỏ bước, chọn sai phạm vi, báo sai vị trí code hoặc trả về format không đồng bộ. Kết quả nằm rải rác trong các phiên chat của dev cũng khiến team khó tổng hợp và đánh giá chất lượng review.

BS RN Review giải quyết các vấn đề này bằng ba thành phần:

- **Quy tắc chung và binding riêng:** best practice React Native được duy trì trong plugin; binding khai báo kiến trúc, quy ước và cấu hình review của từng dự án.
- **Hướng dẫn kết hợp script:** AI phân tích logic; script lấy diff theo cấu hình, đối chiếu file, dòng AI báo và tạo báo cáo theo format cố định.
- **Báo cáo và feedback tập trung:** kết quả được lưu và gửi lên Gitea khi đã cấu hình, thay vì chỉ nằm trong từng phiên chat của dev như khi dùng Skill thông thường. Team có thể xem lại, phản hồi và dùng dữ liệu này để cải thiện plugin ở các version sau.

Toàn bộ được đóng gói thành Plugin để team cài đặt, cập nhật chung và sử dụng trên cả Claude lẫn Codex.

---

## 2. Vì sao đóng gói thành plugin?

Một skill tối giản thường bắt đầu bằng file `SKILL.md` chứa hướng dẫn:

```text
Đọc phần code thay đổi → áp dụng checklist → trả lời
```

Với nhu cầu cá nhân, cách này có thể đã đủ tốt. Skill cũng có thể gọi tool, tạo subagent hoặc đi kèm script; vì vậy **không phải cứ là plugin thì tự động review tốt hơn skill**.

BS RN Review được đóng gói thành plugin vì nó cần phân phối và cập nhật đồng thời nhiều thành phần cho cả team:

| Thành phần                             | Vai trò                                                                                                                                                                               |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `rn-review` - skill chạy review        | Hướng dẫn AI thực hiện quy trình: chạy Gate → tạo subagent review → kiểm tra kết quả → xuất báo cáo.                                                                                  |
| `rn-review-setup` — skill cấu hình app | Khảo sát project và tạo file `rn-binding.md`, ghi nhánh dùng để so sánh, cấu trúc app, lệnh kiểm tra và các nhóm review được bật. Team kiểm tra và commit cấu hình này để dùng chung. |
| Reviewer — subagent chuyên review      | Một phiên AI đọc diff, code liên quan và quy tắc của plugin để tìm lỗi. Không nhận lịch sử chat trước đó, giúp hạn chế việc bị ảnh hưởng bởi context rác.                             |
| Gate — script chuẩn bị dữ liệu         | Lấy diff theo cấu hình, tổng hợp kết quả kiểm tra tự động và tìm những nơi có thể bị ảnh hưởng bởi thay đổi để cô đọng phần context cho reviewer phân tích.                           |
| Validator — script kiểm tra kết quả AI | Đối chiếu file, dòng và đoạn code AI báo; kiểm tra quy tắc và mức ảnh hưởng trước khi đưa vào báo cáo.                                                                                |
| Bộ tạo báo cáo                         | Chuyển kết quả đã qua Validator thành báo cáo tiếng Việt theo format cố định: vấn đề ở đâu, xảy ra khi nào, hậu quả và hướng xử lý; kèm phạm vi đã kiểm tra và các giới hạn.          |
| Recap — lưu kết quả và nhận phản hồi   | Lưu báo cáo trên máy và gửi lên Gitea khi đã cấu hình. Team phản hồi nhận định đúng, sai hoặc không cần xử lý để theo dõi và cải thiện chất lượng review.                             |
| Bộ quy tắc và tài liệu tham chiếu      | Hướng dẫn reviewer kiểm tra logic, crash, quy ước app, rủi ro phát hành và hiệu năng. Phần hiệu năng sử dụng tài liệu Callstack được đóng gói cùng plugin.                            |

Plugin giúp đóng gói toàn bộ các phần trên thành **một đơn vị có version, cài đặt và cập nhật được cho cả team trên Claude và Codex**.

### So sánh nhanh

| Skill chỉ có hướng dẫn/checklist                                   | BS RN Review plugin                                                                                        |
| ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| AI tự xác định phần code cần đọc theo hướng dẫn                    | Script lấy diff theo nhánh so sánh và cấu hình của app                                                     |
| Có thể review ngay trong phiên chat đang viết code                 | Tạo subagent chuyên review, không nhận lịch sử chat trước đó                                               |
| File, dòng và đoạn code do AI chỉ ra có thể chưa được kiểm tra lại | Validator đối chiếu các thông tin này với code thực tế                                                     |
| Format báo cáo phụ thuộc vào việc AI làm đúng hướng dẫn            | Script tạo báo cáo tiếng Việt theo format cố định                                                          |
| Kết quả thường nằm riêng trong từng phiên chat, khó tổng hợp       | Lưu báo cáo tập trung trên Gitea khi đã cấu hình, hỗ trợ feedback và có bộ kiểm thử để đánh giá chất lượng |

Plugin không làm model “thông minh hơn”. Lợi thế của nó là tách rõ trách nhiệm:

- **AI:** hiểu logic và đưa ra nhận định.
- **Script:** thực hiện các bước cần tính lặp lại và đối chiếu dữ liệu.
- **Dev:** đọc nhận định và quyết định cuối cùng.

---

## 3. Plugin hoạt động như thế nào?

Trước khi đi vào flow, cần hiểu các khái niệm:

| Khái niệm     | Hiểu đơn giản                                                                                                             |
| ------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **Gate**      | Bước chuẩn bị trước khi AI review: lấy đúng phần code đã đổi, chạy các kiểm tra tự động và chuẩn bị dữ liệu cho Reviewer. |
| **Reviewer**  | Spawn ra một subagent, chỉ làm nhiệm vụ review                                                                            |
| **Validator** | Script đối chiếu issue AI báo với file, dòng và đoạn code thực tế.                                                        |

Flow đầy đủ:

```text
Code thay đổi
    ↓
Gate lấy diff và chuẩn bị dữ liệu review
    ↓
Reviewer phân tích code và tìm issue
    ↓
Validator kiểm tra vị trí code và quy tắc của từng issue
    ↓
Tạo báo cáo tiếng Việt, lưu lên Gitea để lưu lại báo cáo
    ↓
Review đạt: tạo thêm Description cho PR từ template của app
```

### Bước 0 — Binding: file cấu hình riêng của từng app

Mỗi app có một file:

```text
docs/agents/rn-binding.md
```

Binding là file giúp một plugin dùng chung hiểu cấu trúc riêng của từng app. Nó cho plugin biết:

- Base branch dùng để so sánh code.
- App dùng Expo CNG, bare hay hybrid workflow.
- File nào quản lý analytics, storage, config và navigation.
- Lệnh kiểm tra nào app thực sự hỗ trợ.
- File nào được công cụ sinh tự động và không nên review.
- Nhóm review nào đang được bật.

**Quy tắc dùng review chung nằm trong plugin; thông tin riêng của app nằm trong binding.** Không copy binding từ app này sang app khác.

### Bước 1 — Gate: xác định phạm vi và chuẩn bị dữ liệu review

Gate lấy mọi thay đổi từ điểm branch hiện tại tách ra khỏi base branch cho tới trạng thái code đang có trên máy, gồm:

- Commit trên branch hiện tại.
- File đã stage.
- File chưa stage.
- File mới chưa commit nhưng không bị Git ignore.

Sau đó Gate:

- Chụp lại phần code thay đổi để reviewer dùng cùng một phiên bản.
- Loại các file được sinh tự động khỏi review.
- Chạy secret scan nếu app có scanner.
- Chạy các kiểm tra tự động theo cấu hình app và lưu kết quả cho báo cáo.
- Phân loại rủi ro native, dependency và release.

Gate **không tự kết luận bug**. Nó chỉ xác định phạm vi và chạy các công cụ để chuẩn bị dữ liệu cho subagent Reviewer.

### Bước 2 — Một subagent chuyên review

Plugin tạo đúng một **subagent**: một phiên AI có khu vực làm việc riêng và chỉ thực hiện review. Subagent nhận đường dẫn tới repo, cấu hình app, kết quả Gate và nơi ghi kết quả; nó không nhận:

- Lời giải thích của người viết code.
- Các vấn đề AI đã báo ở lần review trước.
- Context của session chat.

Subagent đọc phần code đã đổi, cấu hình app, code liên quan và các quy tắc phù hợp. Mỗi vấn đề nó báo phải trả lời được:

1. Lỗi nằm ở đâu?
2. Xảy ra trong tình huống nào?
3. Hậu quả thực tế là gì?
4. Nên xử lý theo hướng nào?
5. Dựa trên quy tắc kiểm tra nào?

### Bước 3 — Validator: đối chiếu kết quả AI với code thật

Subagent ghi danh sách vấn đề vào `findings.json`. Validator kiểm tra từng vấn đề:

- Loại vấn đề đó có nằm trong các nhóm app đã bật review không?
- Mức ảnh hưởng có đủ cao để đưa vào báo cáo không? Ví dụ app có thể chỉ muốn báo từ mức **Nhẹ** trở lên và bỏ các góp ý quá nhỏ.
- File và số dòng có thật trong phần code vừa thay đổi không?
- Đoạn code nguyên dòng mà AI trích lại có khớp với code thật không?
- Nếu AI nói “hàm này đổi cách trả kết quả và làm hỏng nơi đang dùng nó”, plugin có thực sự tìm thấy file đang import và sử dụng hàm đó không?

Trong dữ liệu nội bộ, mỗi vấn đề có **nhóm** và **mã quy tắc**. Ví dụ, nhóm `correctness` chứa các kiểm tra về logic; mã `correctness/B1` chỉ ra chính xác quy tắc AI đã dùng. Dev không cần học thuộc các mã này. Chúng giúp plugin không chấp nhận loại lỗi do AI tự nghĩ ra, đồng thời giúp team biết quy tắc nào thường báo đúng hoặc báo sai.

Issue qua được các Validator trên mới xuất hiện trong báo cáo chính.

> Validator xác nhận AI đã chỉ đúng phần code liên quan. Nó không thể tự chứng minh toàn bộ suy luận nghiệp vụ của AI chắc chắn đúng; Dev vẫn cần đọc và quyết định.

### Bước 4 — Tạo báo cáo và lưu recap

Plugin tạo báo cáo tiếng Việt thống nhất:

- Kết luận đầu báo cáo: có thể push, nên sửa, đừng push hoặc chưa review được.
- Tối đa 5 vấn đề, xếp theo mức ảnh hưởng.
- Phạm vi đã kiểm tra.
- Nhóm nào đã kiểm tra, không liên quan hoặc không thể kiểm tra.
- Kết quả kiểm tra tự động và phiên bản code đã review.
- Việc Dev cần tự kiểm tra thêm ở những nơi plugin không tự lần theo được.
- **Description cho PR** ở cuối báo cáo khi review đạt mức "có thể push": nội dung PR dựng từ `.gitea/PULL_REQUEST_TEMPLATE.md` của app, đã điền Description và tick checklist theo kết quả review, đồng thời lưu thành file `pr-description.md`. Xem cách đọc ở phần 7.

`Recap` là bản lưu của lần review dành cho team và người duy trì plugin. Nó được lưu trên máy trước, sau đó plugin thử đăng lên repo Gitea. Mất mạng hoặc thiếu token chỉ làm recap chờ gửi lại; **không thay đổi kết quả review**.

---

## 4. Plugin kiểm tra những gì?

| Nhóm                   | Nội dung kiểm tra                                                                                         |
| ---------------------- | --------------------------------------------------------------------------------------------------------- |
| **Logic**              | Thay đổi có làm sai hành vi hoặc ảnh hưởng đến code đang sử dụng không?                                   |
| **Crash**              | Code render và JSX có nguy cơ làm app crash không?                                                        |
| **Quy ước dự án**      | Code thay đổi có tuân thủ các quy ước và cấu trúc của app không?                                          |
| **Build và phát hành** | Thay đổi có ảnh hưởng đến native, OTA, dữ liệu đã lưu hoặc hành vi trên iOS/Android không?                |
| **Hiệu năng**          | Có rủi ro về render, xử lý tương tác, tài nguyên hoặc thời gian khởi động theo hướng dẫn Callstack không? |

---

## 5. Cài đặt

### Yêu cầu chung

- Git hoạt động và repo app có `HEAD` hợp lệ.
- Node.js 20 trở lên.
- Dependencies của app đã được cài theo workflow của app.
- App đã có `docs/agents/rn-binding.md`; nếu chưa có, người phụ trách app chạy setup một lần.

### Cách A — Claude Code

Yêu cầu Claude Code `>= 2.1.271`.

```bash
claude plugin marketplace add https://git.bssdev.cloud/truongtd/rn-code-review.git
claude plugin install bs-rn-review@bs-mobile
```

Mở Claude Code trong repo app. Nếu app chưa có binding:

```text
/bs-rn-review:rn-review-setup
```

Setup chỉ cần thực hiện một lần cho mỗi app. Review các giá trị được đề xuất, sau đó commit binding và settings mà setup tạo ra. Nếu repo đã có binding, không cần chạy lại.

### Cách B — Codex

```bash
codex plugin marketplace add https://git.bssdev.cloud/truongtd/rn-code-review
codex plugin add bs-rn-review@bs-mobile
```

Sau khi cài, mở một Codex session mới trong repo app. Nếu app chưa có binding:

```text
$rn-review-setup
```

Nếu terminal chưa nhận lệnh `codex` khi dùng Codex trong app ChatGPT trên macOS:

```bash
echo 'export PATH="/Applications/ChatGPT.app/Contents/Resources/codex-cli/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

### Cấu hình recap — khuyến nghị

Review vẫn chạy khi không có token, nhưng recap sẽ chỉ được lưu local. Mỗi Dev có thể lưu Gitea token một lần theo hướng dẫn:

[Lưu kết quả review lên Gitea](review-recaps.md#cấu-hình-một-lần)

Không dán token vào chat và không commit token vào repo.

---

## 6. Sử dụng hằng ngày

Chạy sau khi hoàn thành code và trước commit hoặc push.

### Claude Code

```text
/bs-rn-review:rn-review
```

### Codex

```text
$rn-review
```

### Trong lúc review

- Không sửa code cho tới khi review kết thúc.
- Chờ các bước kiểm tra hoàn tất.
- Plugin chỉ tìm và báo lỗi; bạn quyết định có sửa hay không và sửa như thế nào.

---

## 7. Cách đọc kết quả

### Kết luận ở đầu báo cáo

| Kết quả                                   | Ý nghĩa                                                                          |
| ----------------------------------------- | -------------------------------------------------------------------------------- |
| **Có thể push trong phạm vi đã kiểm tra** | Không có vấn đề nghiêm trọng hoặc vấn đề ở mức chặn push trong phần đã review    |
| **Nên sửa trước khi push**                | Có ít nhất một vấn đề nghiêm trọng                                               |
| **Đừng push**                             | Có vấn đề ở mức chặn push cần xử lý trước                                        |
| **Chưa review được**                      | Một bước trong quy trình không hoàn tất; không được hiểu là code không có vấn đề |

### Mức độ ảnh hưởng

Mức độ ảnh hưởng được gọi là `severity`. Dev chỉ cần hiểu bốn mức hiển thị trong báo cáo:

| Mức          | Ý nghĩa                                                 |
| ------------ | ------------------------------------------------------- |
| Chặn push    | Rủi ro rất cao, không nên tiếp tục release              |
| Nghiêm trọng | Nên sửa trước khi push                                  |
| Nhẹ          | Vấn đề có thật nhưng tác động thấp hơn                  |
| Góp ý        | Cải thiện nhỏ nhưng vẫn đạt ngưỡng mà app muốn hiển thị |

### Một vấn đề được báo gồm

- Vị trí và dòng code thay đổi.
- Tình huống gây lỗi.
- Hậu quả.
- Cách xử lý.
- Quy tắc kiểm tra được sử dụng.

### Hiểu đúng “không phát hiện vấn đề”

“Không phát hiện vấn đề” có nghĩa:

> Reviewer không tìm thấy vấn đề được xác nhận trong phạm vi và nhóm đã kiểm tra.

Nó không có nghĩa:

- Code chắc chắn không có bug.
- Mọi luồng có thể xảy ra khi app chạy đã được kiểm tra.
- Mọi nơi gọi code theo cách động đã được tìm thấy.
- Có thể bỏ qua self-test hoặc review của con người.

Nên đọc phần **Mức độ kiểm tra** và **Bạn nên tự kiểm tra thêm**.

### Description cho PR

CI AI review của BSS (`aiReviewCode`) bỏ qua PR có mục Description trống và đối chiếu code với Description. Vì vậy khi review đạt mức **Có thể push trong phạm vi đã kiểm tra** (kể cả khi còn vấn đề Nhẹ), cuối báo cáo có mục **Description cho PR**:

- Nội dung dựng từ `.gitea/PULL_REQUEST_TEMPLATE.md` **trong nhánh đang review**, giữ nguyên heading và câu chữ của template, đồng thời lưu thành file `pr-description.md` (báo cáo ghi đường dẫn).
- Mục Description gồm: một đoạn mở nói hành vi trước và sau thay đổi; **Các thay đổi chính** (tối đa 6 dòng, mỗi dòng một khu vực code); **Ảnh hưởng tới code khác** (symbol bị xoá hoặc đổi, nơi đang dùng code chung, cần test ở đâu). Không có tên nhánh hay mã task.
- Checklist được tick theo kết quả review. Ô bị để trống khi review thấy vi phạm, khi nhóm kiểm tra liên quan không chạy được, hoặc khi dòng đó trong template đã lỗi thời.
- **Self Test luôn để trống**: Dev tự tick sau khi tự test.
- **Template cần cập nhật**: các dòng template mâu thuẫn với code hoặc binding. Hãy sửa template của app.
- Fixed Issues chỉ giữ tiêu đề; Dev tự thêm mã task nếu cần.

Khi không tạo được, mục này ghi một dòng lý do: review chưa đạt, repo thiếu `.gitea/PULL_REQUEST_TEMPLATE.md`, template không có mục Description, hoặc phần mô tả do reviewer viết không hợp lệ. Description không được đưa vào recap.

---

## 8. Những điểm cần lưu ý

### Plugin review toàn bộ thay đổi của branch

Phạm vi không chỉ là file đang mở hoặc commit cuối. Plugin bắt đầu từ điểm branch hiện tại tách khỏi base branch, rồi lấy toàn bộ commit và thay đổi chưa commit trên máy.

### Không sửa code khi review đang chạy

Phần code dùng cho reviewer được chụp lại khi bắt đầu, nhưng các công cụ kiểm tra và bước tìm nơi sử dụng vẫn đọc file hiện tại. Nếu sửa code giữa lúc review, các bước có thể nhìn thấy những phiên bản code khác nhau.

### Generated files không được review

Các đường dẫn được binding đánh dấu là file sinh tự động sẽ bị loại khỏi phần review. Plugin không cố đoán những file này được sinh bằng tool hay bị sửa tay.

### Plugin không thể tự tìm được mọi nơi đang sử dụng code

Plugin lần theo các câu lệnh `import` và `export` để tìm nơi đang sử dụng hàm hoặc giá trị vừa bị đổi. Cách này hữu ích nhưng không hiểu được mọi hành vi xảy ra lúc app chạy. Nó có thể bỏ sót:

- Route được gọi bằng string.
- Store path qua `useSelector`.
- Dynamic `import()`.
- Computed `require()`.
- Generated code và test files.
- Custom Metro resolver.

Khi thay đổi có khả năng đi qua các đường này, báo cáo sẽ chỉ rõ Dev nên tìm và kiểm tra thêm ở đâu.

### Reviewer trên Claude và Codex được tách biệt hơi khác nhau

- **Claude:** tạo một agent đã được khai báo sẵn, không tự nạp `CLAUDE.md` và chỉ được dùng các công cụ đã cho phép.
- **Codex:** không truyền cuộc trò chuyện của Dev sang subagent, nhưng subagent vẫn có thể nhận hướng dẫn hệ thống và file `AGENTS.md` của project.

Hai bản dùng chung quy tắc, Gate, validator và format báo cáo; chỉ khác một chút ở cách mỗi công cụ tạo subagent.

### Kiểm tra hiệu năng cần tài liệu Callstack

Plugin dùng một phiên bản tài liệu Callstack được đóng gói sẵn. Nếu không đọc được tài liệu này, phần hiệu năng phải báo `Không thể kiểm tra`; reviewer không được tự nghĩ ra quy tắc thay thế.

---

## 9. Phản hồi vấn đề plugin báo

Feedback giúp người duy trì plugin biết quy tắc nào đúng và có giá trị trong code thật.

Sau khi kiểm tra một recap trên Gitea:

- Gắn label `đúng` nếu nhận định đúng và hữu ích.
- Gắn label `sai` nếu nhận định không đúng.
- Gắn label `skip` nếu nhận định có thể đúng nhưng không đáng làm phiền Dev.

Nếu từng vấn đề trong cùng recap có kết luận khác nhau, comment theo ID:

```text
feedback: F1 | đúng | đã tái hiện trên Android
feedback: F2 | sai | nơi gọi hàm đã kiểm tra trường hợp này ở phía trên
feedback: F3 | skip | edge case không tồn tại trong sản phẩm
```

Lý do ngắn quan trọng hơn số đếm: nó giúp người duy trì biết phải sửa quy tắc ở đâu.

---

## 10. Cập nhật plugin

### Claude Code

**Khuyến nghị: bật tự cập nhật một lần** bằng cách thêm `"autoUpdate": true` cho marketplace `bs-mobile` trong `~/.claude/settings.json`. Nếu file đã có mục `bs-mobile` trong `extraKnownMarketplaces`, chỉ cần thêm dòng `autoUpdate`; nếu chưa có, thêm cả mục:

```json
"extraKnownMarketplaces": {
  "bs-mobile": {
    "source": {
      "source": "git",
      "url": "https://git.bssdev.cloud/truongtd/rn-code-review.git"
    },
    "autoUpdate": true
  }
}
```

Từ đó mỗi lần mở Claude, marketplace và plugin tự lên version mới (có hiệu lực từ session tiếp theo). Giữ JSON hợp lệ: các mục trong cùng object cách nhau bằng dấu phẩy.

Cập nhật bằng tay:

```bash
claude plugin marketplace update bs-mobile
claude plugin update bs-rn-review@bs-mobile --scope user
claude plugin list
```

- Phải chạy `marketplace update` trước; nếu không, `plugin update` không thấy bản mới.
- `plugin update` chỉ cập nhật **một scope**. Không có `--scope user`, lệnh chỉ cập nhật bản cài của thư mục đang đứng.
- Repo nào bật plugin trong `.claude/settings.json` (như `v567app`) sẽ có thêm bản cài theo project cho từng thư mục hoặc worktree, và bản này được ưu tiên hơn bản user. Nếu `claude plugin list` trong thư mục đó vẫn báo version cũ, chạy `claude plugin update bs-rn-review@bs-mobile --scope project` ngay trong thư mục đó.

Sau khi cập nhật, đóng session hiện tại và mở session mới.

### Codex

```bash
codex plugin marketplace upgrade bs-mobile
```

Sau đó mở Codex session mới.

Chỉ remove/add lại khi upgrade không cập nhật đúng:

```bash
codex plugin remove bs-rn-review@bs-mobile
codex plugin add bs-rn-review@bs-mobile
```

---

## 11. Checklist cho Dev

### Trước review

- [ ] Feature/fix đã hoàn thành ở mức sẵn sàng self-review.
- [ ] Dependencies của app đã được cài.
- [ ] Không còn file chứa token, key hoặc thông tin đăng nhập trong phần code chưa commit.
- [ ] Không có process khác đang tự động sửa code.

### Sau review

- [ ] Đọc kết luận đầu báo cáo và trạng thái từng nhóm kiểm tra.
- [ ] Kiểm tra từng vấn đề plugin báo trong code thật.
- [ ] Thực hiện manual checks nếu report yêu cầu.
- [ ] Sửa và self-test lại; chạy review lần nữa nếu thay đổi đáng kể.
- [ ] Không blind merge chỉ vì report nói “có thể push”.
- [ ] Đọc lại Description cho PR, tự tick Self Test rồi dán vào PR.
- [ ] Phản hồi từng vấn đề trên recap để cải thiện quy tắc review.

---

## 12. Câu hỏi thường gặp

### Plugin có sửa code giúp mình không?

Không. Plugin chỉ review và báo cáo. Dev quyết định cách sửa.

### Plugin có chạy trên CI không?

Không. Đây là review local trước commit/push. CI AI review của BSS (`aiReviewCode`) là một hệ thống khác chạy trên Pull Request; plugin hỗ trợ nó bằng **Description cho PR** để PR không bị CI bỏ qua vì thiếu mô tả.

### Có cần chạy setup mỗi lần review không?

Không. Setup chạy một lần cho mỗi app. Khi binding đã được commit, mọi Dev dùng chung.

### Claude và Codex có cho kết quả giống hệt nhau không?

Hai bản dùng chung dữ liệu, quy tắc và validator. Kết luận AI vẫn có thể khác do model hoặc môi trường chạy, nhưng format đầu ra và cách đối chiếu code giống nhau.

### Vì sao chỉ có một reviewer?

Một reviewer đọc toàn bộ phần code thay đổi giúp tránh báo trùng, giảm lượng nội dung phải truyền giữa nhiều AI và xếp mọi vấn đề trên cùng một danh sách mức ảnh hưởng. Cấu hình app chỉ chọn nhóm kiến thức cần dùng, không tạo thêm reviewer.

### Vì sao không có AI thứ hai verify kết quả?

Một AI thứ hai vẫn có thể sai và làm tăng chi phí. Thay vào đó, plugin dùng chương trình có quy tắc cố định để đối chiếu file, dòng và đoạn code AI đã chỉ ra. Các bộ tình huống kiểm thử và phản hồi từ code thật được dùng để đánh giá chất lượng suy luận của AI.

### Review sạch có được lưu recap không?

Có. Lần review không phát hiện vấn đề vẫn giúp team biết plugin đã kiểm tra những phần nào và theo dõi chất lượng của plugin.
