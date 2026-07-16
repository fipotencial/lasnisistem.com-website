import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const legacyMenuRedirects: Record<string, string> = {
  '111': '/sl',
  '117': '/sl/blog/hollywood-lasni-sistem-lasulje-in-tupeji',
  '80': '/sl/svetovalni-studio',
  '82': '/sl/mnenja-strank',
  '122': '/sl/blog/pogosta-vprasanja-in-odgovori',
  '162': '/sl/blog/nega-in-vzdrzevanje-lasnega-sistema',
  '128': '/sl/pravno-obvestilo',
  '136': '/sl/blog',
  '83': '/sl/blog/izpadanje-las-izguba-las-plesavost',
  '84': '/sl/blog/alopecia-areata',
  '85': '/sl/blog/naaf-national-alopecia-areata-foundation',
  '193': '/sl/hibridni-sistemi',
  '168': '/sl/hibridni-sistemi',
  '170': '/sl/hibridni-sistemi',
  '133': '/sl/blog/itech-sprej-za-svez-videz-in-sijoce-lase',
  '87': '/sl/poslanstvo',
  '86': '/sl/blog/skupina-za-samopomoc',
  '88': '/sl/svetovalni-studio',
  '89': '/sl/kontakt',
  '119': '/sl/mediji',
  '147': '/sl/pravno-obvestilo',
  '207': '/sl/pravno-obvestilo',
}

export function middleware(request: NextRequest) {
  const menuId = request.nextUrl.searchParams.get('iIdMeni')
  const destination = menuId ? legacyMenuRedirects[menuId] : undefined
  const redirectUrl = new URL(destination || '/sl', request.url)

  // Legacy query parameters must not survive the redirect because they create
  // crawlable duplicate URLs on the destination.
  redirectUrl.search = ''

  return NextResponse.redirect(redirectUrl, 308)
}

export const config = {
  matcher: ['/index.php', '/index.php/'],
}
