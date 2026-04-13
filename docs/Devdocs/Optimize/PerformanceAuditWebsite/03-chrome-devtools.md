---
id: chrome-devtools
title: Chrome DevTools
---

## Các chỉ số đo được
### Desktop
<strong> Tổng quan </strong>

![Chrome DevTools](/img/performance-audit-website/chrome-devtools-desktop.png)

<strong> Size của JS, CSS, Image</strong>

JS
![Chrome DevTools](/img/performance-audit-website/chrome-devtools-js-size-desktop.png)

CSS
![Chrome DevTools](/img/performance-audit-website/chrome-devtools-css-size-desktop.png)

Image
![Chrome DevTools](/img/performance-audit-website/chrome-devtools-img-size-desktop.png)

### Mobile

<strong> Tổng quan </strong>

![Chrome DevTools](/img/performance-audit-website/chrome-devtools-mobile.png)

<strong> Size của JS, CSS, Image</strong>

JS
![Chrome DevTools](/img/performance-audit-website/chrome-devtools-js-size-mobile.png)

CSS
![Chrome DevTools](/img/performance-audit-website/chrome-devtools-css-size-mobile.png)

Image
![Chrome DevTools](/img/performance-audit-website/chrome-devtools-img-size-mobile.png)

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
            <td>1.97s</td>
            <td>< 2.5s là tốt</td>
        </tr>
        <tr>
            <td>INP</td>
            <td>416ms</td>
            <td>145ms</td>
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
            <th>Size Mobile</th>
            <th>Size Desktop</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Total JS</td>
            <td>4076kb</td>
            <td>2896kb</td>
        </tr>
        <tr>
            <td>Total CSS</td>
            <td>467kb</td>
            <td>467kb</td>
        </tr>
        <tr>
            <td>Total Image</td>
            <td>10053kb</td>
            <td>11207kb</td>
        </tr>
        <tr>
            <td>Number of Request</td>
            <td>417</td>
            <td>391</td>
        </tr>
    </tbody>
</table>