---
id: GTmetrix
title: GTmetrix
---

## Các chỉ số đo được
### Desktop
<strong> Tổng quan </strong>

![Chrome DevTools](/img/performance-audit-website/GTmetrix-desktop.png)

<strong> Tab structure note chi tiết các element cần sửa để cải thiện </strong>

![Chrome DevTools](/img/performance-audit-website/GTmetrix-structure.png)

<strong> Size của JS, CSS, Image</strong>

JS
![Chrome DevTools](/img/performance-audit-website/GTmetrix-jssize.png)

CSS
![Chrome DevTools](/img/performance-audit-website/GTmetrix-csssize.png)

Image
![Chrome DevTools](/img/performance-audit-website/GTmetrix-imgsize.png)

### Mobile
<strong>Cần upgrade lên pro để config mobile.</strong>

![Chrome DevTools](/img/performance-audit-website/GTmetrix-mobile.png)

## Bảng tổng hợp metric

<table>
    <thead>
        <tr>
            <th>Metric</th>
            <th>Mobile</th>
            <th>Desktop</th>
            <th>Ghi chú</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Performance score</td>
            <td>Cần nâng cấp</td>
            <td>53</td>
            <td>Cần nâng cấp lên pro(mất phí) để có thể config mobile.</td>
        </tr>
        <tr>
            <td>LCP</td>
            <td>Cần nâng cấp</td>
            <td>2.7</td>
            <td>< 2.5s là tốt</td>
        </tr>
        <tr>
            <td>INP</td>
            <td>Cần nâng cấp</td>
            <td>Không đo được</td>
            <td>Không hiển thị chỉ số</td>
        </tr>
        <tr>
            <td>CLS</td>
            <td>Cần nâng cấp</td>
            <td>0.04</td>
            <td>< 0.1 là tốt</td>
        </tr>
        <tr>
            <td>TTFB</td>
            <td>Cần nâng cấp</td>
            <td>Không đo được</td>
            <td>Không hiển thị chỉ số</td>
        </tr>
    </tbody>
</table>

<table>
    <thead>
        <tr>
            <th>Resource</th>
            <th>Size Mobile</th>
            <th>Size Desktop</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Total JS</td>
            <td>Cần nâng cấp</td>
            <td>1.63mb</td>
        </tr>
        <tr>
            <td>Total CSS</td>
            <td>Cần nâng cấp</td>
            <td>331kb</td>
        </tr>
        <tr>
            <td>Total Image</td>
            <td>Cần nâng cấp</td>
            <td>10.7mb</td>
        </tr>
        <tr>
            <td>Number of Request</td>
            <td>Cần nâng cấp</td>
            <td>378</td>
        </tr>
    </tbody>
</table>