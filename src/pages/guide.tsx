import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import links from '@site/src/data/guide-links.json';

type GuideLink = {
  id: number;
  name: string;
  url: string;
};

export default function Guide(): JSX.Element {
  return (
    <Layout title="Guide" description="Useful links and resources">
      <main className="container margin-vert--lg">
        <Heading as="h1">Guide slides</Heading>
        <p>Học hành là chuyện cả đời. Dăm 3 cái docs nhằm nhò gì đâu. TẠO THÊM ĐI MÁ</p>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={thStyle}>ID</th>
              <th style={thStyle}>Slide Name</th>
              <th style={thStyle}>slide Link</th>
            </tr>
          </thead>
          <tbody>
            {(links as GuideLink[]).map((link) => (
              <tr
                key={link.id}
                style={rowStyle}
                onClick={() => window.open(link.url, '_blank')}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <td style={tdStyle}>{link.id}</td>
                <td style={tdStyle}>{link.name}</td>
                <td style={tdStyle}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.url}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </Layout>
  );
}

const thStyle: React.CSSProperties = {
  textAlign: 'left',
  padding: '10px 14px',
  borderBottom: '2px solid #ddd',
  backgroundColor: '#f8f8f8',
};

const tdStyle: React.CSSProperties = {
  padding: '10px 14px',
  borderBottom: '1px solid #eee',
};

const rowStyle: React.CSSProperties = {
  cursor: 'pointer',
  transition: 'background-color 0.15s',
};
