import { useEffect, useState } from "react";
import { connect } from "react-redux";
import FullWidth from "../layouts/fullWidth";
import Components from "../components";
import { fetchPage } from "../redux/actions/contentful";

const createSection = section => {
  const contentType = section.sys.contentType.sys.id;
  const fields = section.fields;

  const CreatedComponent = Components[contentType].component;
  const componentFactory = Components[contentType].factory;
  const props = componentFactory(fields);

  return <CreatedComponent key={section.sys.id} {...props} />;
};

const Index = props => {
  const { dispatch, page } = props;

  useEffect(() => {
    dispatch(fetchPage("/"));
  }, []);

  if (!page) return null;
  const { sections } = page.fields;

  return (
    <FullWidth>
      {sections.map(section => {
        return createSection(section);
      })}
    </FullWidth>
  );
};

const mapStateToProps = state => ({
  page: state.contentful.page,
  loading: state.contentful.loading,
  error: state.contentful.error
});

export default connect(mapStateToProps)(Index);
