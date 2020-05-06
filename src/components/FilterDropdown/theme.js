// can't figure out how to use styled-components on Autosuggest, so just using theme prop
export default {
  container: {
    position: 'relative',
  },
  input: {
    width: '-webkit-fill-available',
    height: 20,
    padding: '9px 76px',
    fontFamily: 'Helvetica, sans-serif',
    fontWeight: 300,
    fontSize: 16,
    border: '1px solid #aaa',
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    backgroundColor: '#222223',
    color: 'white',
    textAlign: 'right',
  },
  inputOpen: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  suggestionsContainer: {
    display: 'none',
  },
  suggestionsContainerOpen: {
    display: 'block',
    position: 'absolute',
    top: 51,
    width: '100%',
    border: '1px solid #aaa',
    backgroundColor: '#222223',
    fontFamily: 'Helvetica, sans-serif',
    fontWeight: 300,
    fontSize: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    zIndex: 2,
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
}
