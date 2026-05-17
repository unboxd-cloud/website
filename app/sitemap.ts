export default function sitemap() {
  const baseUrl = 'https://unboxd.cloud';
  const routes = [
    '',
    '/about',
    '/contact',
    '/solutions',
    '/industries',
    '/platforms',
    '/platforms/publish',
    '/platforms/commerce',
    '/platforms/infrastructure',
    '/platforms/auth-server',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
