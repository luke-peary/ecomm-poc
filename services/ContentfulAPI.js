import { createClient } from "contentful";
import getConfig from "next/config";
export const { publicRuntimeConfig } = getConfig();

class ContentfulServices {
  contentfulClient = createClient({
    space: "k1r1qvt9nkmn",
    accessToken: "afS0r2tsGFGBYjJ6W4iKwEdSCzc6AGnL0X17K-XrGm8"
  });

  async getPage(url) {
    const data = await this.contentfulClient
      .getEntries({
        content_type: "page",
        "fields.pageUrl.sys.contentType.sys.id": "urlInternal",
        "fields.pageUrl.fields.url": url,
        include: 10
      })
      .catch(err => ({ err, statusCode: err.response.status }));

    return data.total ? data : { statusCode: 404 };
  }

  async getConfig() {
    const data = await this.contentfulClient
      .getEntries({
        content_type: "websiteConfig",
        include: 10
      })
      .catch(err => ({ error: err, statusCode: err.response.status }));

    const { total, error, statusCode } = data;

    if (total) {
      return data;
    }

    return {
      statusCode: statusCode || 404,
      err: error
    };
  }
}

export default new ContentfulServices();
