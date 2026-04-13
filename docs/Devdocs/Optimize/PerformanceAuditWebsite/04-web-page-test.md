---
id: web-page-test
title: WebPageTest
---

## Các chỉ số đo được
### Desktop
<strong> Tổng quan </strong>

![WebPageTest](/img/performance-audit-website/WebPageTest-desktop.png)

<strong> Filmstrip </strong>

![WebPageTest](/img/performance-audit-website/WebPageTest-filmstrip-desktop.png)

<strong> Size của JS, CSS, Image</strong>

![WebPageTest](/img/performance-audit-website/WebPageTest-size-js-css-img-desktop.png)

<strong> Waterfall network </strong>

![WebPageTest](/img/performance-audit-website/WebPageTest-waterfall-desktop.png)

### Mobile
<strong> Tổng quan </strong>

![WebPageTest](/img/performance-audit-website/WebPageTest-mobile.png)

<strong> Filmstrip </strong>

![WebPageTest](/img/performance-audit-website/WebPageTest-filmstrip-mobile.png)

<strong> Size của JS, CSS, Image</strong>

![WebPageTest](/img/performance-audit-website/WebPageTest-size-js-css-img-mobile.png)

<strong> Waterfall network </strong>

![WebPageTest](/img/performance-audit-website/WebPageTest-waterfall-mobile.png)

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
            <td>Không đo được</td>
            <td>Không hiển thị chỉ số</td>
        </tr>
        <tr>
            <td>LCP</td>
            <td>3.45s</td>
            <td>1.97</td>
            <td>< 2.5s là tốt</td>
        </tr>
        <tr>
            <td>INP</td>
            <td>420ms</td>
            <td>140ms</td>
            <td>< 200ms là tốt</td>
        </tr>
        <tr>
            <td>CLS</td>
            <td>0.11</td>
            <td>0.01</td>
            <td>< 0.1 là tốt</td>
        </tr>
        <tr>
            <td>TTFB</td>
            <td>1.45s</td>
            <td>1.10s</td>
            <td>< 800ms tốt</td>
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
            <td>1692kb</td>
            <td>1638kb</td>
        </tr>
        <tr>
            <td>Total CSS</td>
            <td>343kb</td>
            <td>343kb</td>
        </tr>
        <tr>
            <td>Total Image</td>
            <td>10056kb</td>
            <td>11209kb</td>
        </tr>
        <tr>
            <td>Number of Request</td>
            <td>372</td>
            <td>366</td>
        </tr>
    </tbody>
</table>