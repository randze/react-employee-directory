import React from 'react';

const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = React.useState(config);

    const sortedItems = React.useMemo(() => {
        let sortableItems = [...items];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [items, sortConfig]);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (
            sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
        ) {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return { items: sortedItems, requestSort, sortConfig };
};

const EmployeeTable = (props) => {
    const { items, requestSort, sortConfig } = useSortableData(props.employees);
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };

    return (
        <table className="table">
            <caption>Employees</caption>
            <thead>
                <tr>
                    <th scope="col">
                        <button
                            type="button"
                            onClick={() => requestSort('id')}
                            className={getClassNamesFor('id')}
                        >
              ID
                        </button>
                    </th>
                    <th scope="col">
                        <button
                            type="button"
                            onClick={() => requestSort('name')}
                            className={getClassNamesFor('name')}
                        >
              Name
                        </button>
                    </th>
                    <th scope="col">
                        <button
                            type="button"
                            onClick={() => requestSort('city')}
                            className={getClassNamesFor('city')}
                        >
              City
                        </button>
                    </th>
                    <th scope="col">
                        <button
                            type="button"
                            onClick={() => requestSort('country')}
                            className={getClassNamesFor('country')}
                        >
              Country
                        </button>
                    </th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) => (
                    <tr key={item.id}>
                        <th scope="row">{item.id}</th>
                        <td>{item.name}</td>
                        <td>{item.city}</td>
                        <td>{item.country}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default EmployeeTable;
