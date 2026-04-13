---
id: lighthouse
title: Lighthouse
---

## Các chỉ số đo được

### Desktop
<strong> Tổng quan </strong>

![Lighthouse](/img/performance-audit-website/lighthouse-desktop.png)

<strong> Thông tin các element cần sửa để cải thiện </strong>

LCP

![Lighthouse](/img/performance-audit-website/lighthouse-lcp-desktop.png)

CLS

![Lighthouse](/img/performance-audit-website/lighthouse-cls-desktop.png)

<strong> Click view trace để mở waterfall network </strong>

![Lighthouse](/img/performance-audit-website/lighthouse-waterfall-desktop.png)

### Mobile
<strong> Tổng quan </strong>

![Lighthouse](/img/performance-audit-website/lighthouse-mobile.png)

<strong> Thông tin các element cần sửa để cải thiện</strong>

LCP

![Lighthouse](/img/performance-audit-website/lighthouse-lcp-mobile.png)

CLS

![Lighthouse](/img/performance-audit-website/lighthouse-cls-mobile.png)

<strong> Click view trace để mở waterfall network </strong>

![Lighthouse](/img/performance-audit-website/lighthouse-waterfall-mobile.png)

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
            <td>Không đo được</td>
            <td>50</td>
            <td>Mobile time phản hồi lâu nên không hiển thị</td>
        </tr>
        <tr>
            <td>LCP</td>
            <td>8.7s</td>
            <td>1.7s</td>
            <td>< 2.5s là tốt</td>
        </tr>
        <tr>
            <td>INP</td>
            <td>Không đo được</td>
            <td>Không đo được</td>
            <td>Không hiển thị chỉ số</td>
        </tr>
        <tr>
            <td>CLS</td>
            <td>0.091</td>
            <td>0.02</td>
            <td>< 0.1 là tốt</td>
        </tr>
        <tr>
            <td>TTFB</td>
            <td>Không đo được</td>
            <td>Không đo được</td>
            <td>Không hiển thị chỉ số</td>
        </tr>
    </tbody>
</table>

<table>
    <thead>
        <tr>
            <th>Resource</th>
            <th>Size</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Total JS</td>
            <td>Không đo được</td>
        </tr>
        <tr>
            <td>Total CSS</td>
            <td>Không đo được</td>
        </tr>
        <tr>
            <td>Total Image</td>
            <td>Không đo được</td>
        </tr>
        <tr>
            <td>Number of Request</td>
            <td>Không đo được</td>
        </tr>
    </tbody>
</table>